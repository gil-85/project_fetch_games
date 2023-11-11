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
const avatarSet = document.querySelector('#avatar>span');
const side = document.querySelector(`#side`);
const eyes = document.querySelector(`#eyes`);
const mouth = document.querySelector(`#mouth`);
let newChar_1 = ``;
let newChar_2 = ``;
  
const bkg = document.querySelector(`#bkg`);
let bkg_clr = 0;

const errorMessage = document.querySelector(`#p-error_message`);


document.querySelector(`form`).addEventListener(`submit`,(e)=>{
  e.preventDefault();
  const email = document.querySelector(`input[type=email]`).value;
  const logname = document.querySelector(`input[type=text]`).value;

  const aPassword = document.querySelectorAll(`input[type=password]`);
  
  const avatarSet = document.querySelector('#avatar>span');
  
 // const avatars = document.querySelector('#avatars');

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

  let action = 'checkEmail';


  const formData = new FormData();
  formData.append('action', action);
  formData.append('email', email);
  
 if (errorMessage.textContent === '') {
    checkIfEmailExist(formData);
  }  
  

/////////////////////////////////////////////////
  action = 'signing';
  formData.append('action', action);
  formData.append('logname', logname);
  formData.append('password', aPassword[0].value);
  let avatarAndBkg = avatarSet.textContent + bkg_clr;
  formData.append('avatar', avatarAndBkg);

 // signIn(formData);
  //////////////////////////////////////////////////////
 return;
});


////  CHECK IF EMAIL DOES NOT ELREADY EXIST ////
 
const checkIfEmailExist = async (formData) => {
  
  try {
    const res = await fetch('../Controller/users_controller.php', {
      method: 'POST',
      body: formData,
    });
    console.log(res);
    if ( ! res.ok) throw new Error('Network response was not ok');


    const data = await res.json();  
    console.log(data.response);

    if(data.response === 'New email')
      console.log(`function here`);
    else console.log(` otherfunction here`);

    errorMessage.textContent = data.response;
 
  


    //window.location = '../index.php';
  } catch (error) {
    console.error('Error:', error);
  }   

} 






////  GO TO THE SIGN IN SCRIPT WITH THE PARAMETERS ////
const signIn = async (formData) => {

  try {
    const res = await fetch('../Controller/users_controller.php', {
      method: 'POST',
      body: formData,
    });
    console.log(res);
    if ( ! res.ok) throw new Error('Network response was not ok');


    const data = await res.json();  
    console.log(data);
    errorMessage.textContent = data.response;
 
  
    //window.location = '../index.php';
  } catch (error) {
    console.error('Error:', error);
  }   
}









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


////  DISPLAY THE AVATAR CREATION FIELDS ////
document.querySelector(`button[type="button"]`).addEventListener(`click`, e=>{
  let id = e.target.id;
  if(e.target.classList.contains(`avatarSet`)) id = e.target.parentNode.id; //// IF THE CLICK IS ON THE GREEN CHARACTERES ////
    
  document.querySelector(`#e_${id}_e`).classList.remove('ghost');
  document.querySelector(`#e_${id}_e`).classList.add('show_list');
});
  
//// HIDE THE AVATAR CREATION FIELDS ////
document.querySelector(`#e_avatar`).addEventListener(`click`, e=>{
  document.querySelector(`#${e.target.id}_e`).classList.remove('show_list');
  document.querySelector(`#${e.target.id}_e`).classList.add('ghost');
});

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
    ////  UPDATE THE AVATAR BUTTON SPAN GREEN TEXT, THE VALUE WILL BE USED FOR THE DATABASE QUERY ////

    avatarSet.textContent = elementAvatar.childNodes[1].textContent + 
    ' ' + 
    elementAvatar.childNodes[5].textContent + 
    elementAvatar.childNodes[7].textContent +
    elementAvatar.childNodes[9].textContent +
     ' ' + 
     elementAvatar.childNodes[13].textContent
    ;
  })
});

////  CHANGE THE AVATAR BACKGRGOUND ////
function changeBkg(n){
  //// KEEPS VALUE BETWEEN 0 AND 360 ////
  if(n < 0 && bkg_clr === 0) bkg_clr = 360;
  if(n > 0 && bkg_clr === 360) bkg_clr = 0;
  
  bkg_clr += n;

  //bkg.textContent = bkg_clr;

  elementAvatar.style.backgroundImage = `linear-gradient(-225deg, hsl(${bkg_clr - 30}, 100%, 75%), hsl(${bkg_clr}, 100%, 50%), hsl(${bkg_clr + 30}, 100%, 25%))`;
  bkg.style.backgroundImage = `linear-gradient(-225deg, hsl(${bkg_clr - 30}, 100%, 75%), hsl(${bkg_clr}, 100%, 50%), hsl(${bkg_clr + 30}, 100%, 25%))`;
}



//alert('Connexion ok');