document.querySelector(`form`).addEventListener(`submit`,(e)=>{
  e.preventDefault();
  const errorMessage = document.querySelector(`#p-error_message`);
  const email = document.querySelector(`input[type=email]`).value;
  const logname = document.querySelector(`input[type=text]`).value;
  

  if(isValidEmail(email)){
    const aPassword = document.querySelectorAll(`input[type=password]`);
    //// VERIFY THAT THE PASSWORDS MATCH IF IN SIGN UP ////    
    if ( ! currentURL.includes(`log_in`)) {
      if(aPassword[0].value !== aPassword[1].value){
        errorMessage.textContent= `The passwords don't match`;
        return;
      }
    }
  }else{
    errorMessage.textContent= `Email invalid`;
    return;
  } 

  if(isValidLogName(logname)){
    if(logname.length < 4 || logname.length > 16){
      errorMessage.textContent= `The log name should be between 4 and 16 characteres`;
      return;
    }
  }else {
    errorMessage.textContent= `The logname can only have numbers, letters, spaces, hyphens or underscores`;
    return;
  }

  errorMessage.textContent= `OK :)`;
  return;

});


//// CHECK IF THE EMAIL IS VALID ////
const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const isValidLogName = (logName) => {
//// CHECK IF THE LOGNAME IS VALID ////
  const logNamePattern = /^[a-zA-Z0-9_-]+$/;
  return logNamePattern.test(logName);
};

 

function connected(email){
  sessionStorage.setItem(`user_email`, email);
  window.location = `../index.php`;
}


if ( ! currentURL.includes(`log_in`)){
  ////  DISPLAY THE AVATAR CREATION FIELDS ////
  
  document.querySelector(`button[type="button"]`).addEventListener(`click`, e=>{

    let id = e.target.id;
    if(e.target.classList.contains(`avatarSet`)) id = e.target.parentNode.id; //// IF THE CLICK IS ON THE GREEN CHARACTERES ////
    
    document.querySelector(`#e_${id}_e`).classList.remove('ghost');
    document.querySelector(`#e_${id}_e`).classList.add('show_list');
  });
  
  ////  HIDE THE AVATAR CREATION FIELDS ////
  document.querySelector(`#e_avatars`).addEventListener(`click`, e=>{
    document.querySelector(`#${e.target.id}_e`).classList.remove('show_list');
    document.querySelector(`#${e.target.id}_e`).classList.add('ghost');
  });


//// OPTIONS FOR THE AVATAR ////
  const strSides = `() [] {}`;
  const aSides = strSides.split(' ');

  const strRightEyes = `- o T $ @ >`;
  const aRightEyes = strRightEyes.split(' ');

  const strLeftEyes = `- o T $ @ <`;
  const aLeftEyes = strLeftEyes.split(' ');

  const strMouth = `_ . __`;
  const aMouth = strMouth.split(' ');


  const elementAvatar = document.querySelector(`#d-element_avatar`);
  const avatarSet = document.querySelector('#avatars>span');
  const side = document.querySelector(`#side`);
  const eyes = document.querySelector(`#eyes`);
  const mouth = document.querySelector(`#mouth`);
  let newChar_1 = ``;
  let newChar_2 = ``;

  //// CHANGE ELEMEMTS OF THE AVATAR ELEMENT AND BETWEEN THE BUTTONS OF SELECTION ////
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
          elementAvatar.childNodes[9].textContent =  newChar_2;
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
          elementAvatar.childNodes[9].textContent =  newChar_2;
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

          elementAvatar.childNodes[3].textContent =  newChar_1;
          elementAvatar.childNodes[7].textContent =  newChar_2;
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

          elementAvatar.childNodes[3].textContent =  newChar_1;
          elementAvatar.childNodes[7].textContent =  newChar_2;
          eyes.textContent = `${newChar_1} ${newChar_2}`;
        break; 

        case `prev_mouth`: 

          for(let i = 0; i < aMouth.length; i++){
            if(mouth.textContent === aMouth[i])
              if(i > 0) newChar_1 = aMouth[i - 1];
              else newChar_1 = aMouth[aMouth.length - 1]; 
          }

          elementAvatar.childNodes[5].textContent =  newChar_1;
          mouth.textContent = `${newChar_1}`;
        
        break; 

        case `next_mouth`: 

          for(let i = 0; i < aMouth.length; i++){
            if(mouth.textContent === aMouth[i])
              if(i < aMouth.length - 1) newChar_1 = aMouth[i + 1];
              else newChar_1 = aMouth[0]; 
          }

          elementAvatar.childNodes[5].textContent =  newChar_1;
          mouth.textContent = `${newChar_1}`;

        break; 

        default : alert(`default`); break;
      }
      avatarSet.textContent = `
      ${elementAvatar.childNodes[1].textContent}
      ${elementAvatar.childNodes[3].textContent}${elementAvatar.childNodes[5].textContent}${elementAvatar.childNodes[7].textContent}
      ${elementAvatar.childNodes[9].textContent}
      `;
    })
  });
}

//alert('Connexion ok');