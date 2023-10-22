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
}

//alert('Connexion ok');