document.querySelector(`form`).addEventListener(`submit`,(e)=>{
  e.preventDefault();
  const errorMessage = document.querySelector(`#p-error_message`);
  const email = document.querySelector(`input[type=email]`).value;
  const logname = document.querySelector(`input[type=text]`).value;

const aPassword = document.querySelectorAll(`input[type=password]`);

  errorMessage.textContent = ``;
  
  if( ! isValidEmail(email)){
    errorMessage.textContent= `Email invalid`;
    return;
  }
  
  if( ! isValidLogName(logname)){
    errorMessage.textContent= `The logname can only have letters, numbers, hyphens or underscores`;
    return;
  }else if(logname.length < 4 || logname.length > 16){
    errorMessage.textContent= `The log name must be between 4 and 16 characters`;
    return;
  }
  
  if(aPassword[0].value !== aPassword[1].value){
    errorMessage.textContent= `The passwords don't match`;
    return;
  }
 
  
const formData = new FormData();
formData.append('logname', logname);
formData.append('email', email);

 if (errorMessage.textContent === '') {
    fetch('../Controller/sign_in_controller.php', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
        return response.text();
    })
    .then(data => {
      console.log(data);
      window.location = '../index.php';
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
 return;

});


//// CHECK IF THE EMAIL IS VALID ////
const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

//// CHECK IF THE LOGNAME IS VALID ////
const isValidLogName = (logName) => {
  const logNamePattern = /^[a-zA-Z0-9_-]+$/;
  return logNamePattern.test(logName);
};


/*
////  SET THE EMAIL FOR SESSION STORAGE AND REDIRECT TO HOME PAGE ////
function connected(email){
  sessionStorage.setItem(`user_email`, email);
  window.location = `../index.php`;
}
*/


////  DISPLAY THE AVATAR CREATION FIELDS ////
document.querySelector(`button[type="button"]`).addEventListener(`click`, e=>{
  let id = e.target.id;
  if(e.target.classList.contains(`avatarSet`)) id = e.target.parentNode.id; //// IF THE CLICK IS ON THE GREEN CHARACTERES ////
    
  document.querySelector(`#e_${id}_e`).classList.remove('ghost');
  document.querySelector(`#e_${id}_e`).classList.add('show_list');
});
  
//// HIDE THE AVATAR CREATION FIELDS ////
document.querySelector(`#e_avatars`).addEventListener(`click`, e=>{
  document.querySelector(`#${e.target.id}_e`).classList.remove('show_list');
  document.querySelector(`#${e.target.id}_e`).classList.add('ghost');
});


//// OPTIONS FOR THE AVATAR ////
const strSides = `() [] {}`;
const aSides = strSides.split(' ');

const strRightEyes = `- o T > • ◣ ◢ ° ^ ˇ ♡ ๏ ◔`;
const aRightEyes = strRightEyes.split(' ');

const strLeftEyes = `- o T < • ◢ ◣ ° ^ ˇ ♡ ๏ ◔`;
const aLeftEyes = strLeftEyes.split(' ');

const strMouth = `_ __ . .. ‿ ⎵ ᴥ ︿ ▂ ⌓ ෴`; 
const aMouth = strMouth.split(' ');

const elementAvatar = document.querySelector(`#d-element_avatar`);
const avatarSet = document.querySelector('#avatars>span');
const side = document.querySelector(`#side`);
const eyes = document.querySelector(`#eyes`);
const mouth = document.querySelector(`#mouth`);
let newChar_1 = ``;
let newChar_2 = ``;
  
const bkg = document.querySelector(`#bkg`);
let bkg_clr = 0;
  
  //// CHANGE ELEMEMTS OF THE AVATAR ELEMENT AND BETWEEN THE BUTTONS OF SELECTION  ////
document.querySelectorAll(`.d-input_avatar>button`).forEach(btn =>{
  btn.addEventListener(`click`, e=>{

    switch(e.target.id){

      case `prev_side`: 
        
        for(let i = 0; i < aSides.length; i++){
          if(side.textContent.charAt(0) === aSides[i][0])
            if(i > 0){
              newChar_1 = aSides[i - 1][0];
              newChar_2 = aSides[i - 1][1];
            }else{
              newChar_1 = aSides[aSides.length - 1][0];
              newChar_2 = aSides[aSides.length - 1][1];
            }  
        }
        
        elementAvatar.childNodes[1].textContent =  newChar_1;
        elementAvatar.childNodes[13].textContent =  newChar_2;
        side.textContent =  `${newChar_1} ${newChar_2}`;
      break;

      case `next_side`:
        
        for(let i = 0; i < aSides.length; i++){
          if(side.textContent.charAt(0) === aSides[i][0])
            if(i < aSides.length -1){
              newChar_1 = aSides[i + 1][0];
              newChar_2 = aSides[i + 1][1];
            }else{
              newChar_1 = aSides[0][0];
              newChar_2 = aSides[0][1];
            }  
        }
        
        elementAvatar.childNodes[1].textContent =  newChar_1;
        elementAvatar.childNodes[13].textContent =  newChar_2;
        side.textContent =  `${newChar_1} ${newChar_2}`;
      break;
        
      case `prev_eyes`: 

        for(let i = 0; i < aRightEyes.length; i++){
          if(eyes.textContent.charAt(0) === aRightEyes[i][0])
            if(i > 0){
              newChar_1 = aRightEyes[i - 1];
              newChar_2 = aLeftEyes[i - 1];
            }else{
              newChar_1 = aRightEyes[aRightEyes.length - 1];
              newChar_2 = aLeftEyes[aLeftEyes.length - 1];
            }  
        }

        elementAvatar.childNodes[5].textContent =  newChar_1;
        elementAvatar.childNodes[9].textContent =  newChar_2;
        eyes.textContent = `${newChar_1} ${newChar_2}`;
      break; 

      case `next_eyes`: 
        
        for(let i = 0; i < aRightEyes.length; i++){
          if(eyes.textContent.charAt(0) === aRightEyes[i][0])
            if(i < aRightEyes.length - 1){
              newChar_1 = aRightEyes[i + 1];
              newChar_2 = aLeftEyes[i + 1];
            }else{
              newChar_1 = aRightEyes[0];
              newChar_2 = aLeftEyes[0];
            }  
        }

        elementAvatar.childNodes[5].textContent =  newChar_1;
        elementAvatar.childNodes[9].textContent =  newChar_2;
        eyes.textContent = `${newChar_1} ${newChar_2}`;
      break; 

      case `prev_mouth`: 

        for(let i = 0; i < aMouth.length; i++){
          if(mouth.textContent === aMouth[i])
            if(i > 0) newChar_1 = aMouth[i - 1];
            else newChar_1 = aMouth[aMouth.length - 1]; 
        }

        elementAvatar.childNodes[7].textContent = newChar_1;
        mouth.textContent = `${newChar_1}`;
      break; 

      case `next_mouth`: 

        for(let i = 0; i < aMouth.length; i++){
          if(mouth.textContent === aMouth[i])
            if(i < aMouth.length - 1) newChar_1 = aMouth[i + 1];
            else newChar_1 = aMouth[0]; 
        }

        elementAvatar.childNodes[7].textContent = newChar_1;
        mouth.textContent = `${newChar_1}`;
      break; 

      case `prev_bkg`: 
        
        changeBkg(-15);
      break;
      
      case `next_bkg`: 
        
        changeBkg(15);
      break;
    }
    ////  UPDATE THE AVATAR BUTTON SPAN GREEN TEXT  ////
    avatarSet.textContent = `
    ${elementAvatar.childNodes[1].textContent}
    ${elementAvatar.childNodes[5].textContent}${elementAvatar.childNodes[7].textContent}${elementAvatar.childNodes[9].textContent}
    ${elementAvatar.childNodes[13].textContent}
      `;
  })
});

////  CHANGE THE AVATAR BACKGRGOUND ////
function changeBkg(n){
  bkg_clr += n;
  elementAvatar.style.backgroundImage = `linear-gradient(-225deg, hsl(${bkg_clr - 30}, 100%, 75%), hsl(${bkg_clr}, 100%, 50%), hsl(${bkg_clr + 30}, 100%, 25%))`;
  bkg.style.backgroundImage = `linear-gradient(-225deg, hsl(${bkg_clr - 30}, 100%, 75%), hsl(${bkg_clr}, 100%, 50%), hsl(${bkg_clr + 30}, 100%, 25%))`;
}



//alert('Connexion ok');