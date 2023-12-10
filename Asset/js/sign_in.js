
const emailInput = document.querySelector(`input[type=email]`);
const aPassword = document.querySelectorAll(`input[type=password]`);
let email = ``;
let password =``;
let action =  ``;



document.querySelector(`form`).addEventListener(`submit`,(e)=>{
  e.preventDefault();
  
  email = emailInput.value;
  password = aPassword[0].value;
  logname = lognameInput.value;
  errorMessage.textContent = ``;
  
  if( ! isValidEmail(email)){
    errorMessage.textContent= `Email is invalid`;
    return;
  }
  
  if( ! isValidLogName(logname)){
    errorMessage.textContent= `The logname can only have letters, numbers, hyphens or underscores an name must be between 4 and 16 characters`;
    return;
  }
  
  
  if(password !== aPassword[1].value){
    errorMessage.textContent= `The passwords don't match`;
    return;
  }
  

  
  if (errorMessage.textContent === '') {
    
   // action = 'searchIfUserExist';
 
    formData.append('action', action);
    formData.append('email', email);
    formData.append('logname', logname);

    
    action = 'signIn';
    password = CryptoJS.SHA256(password).toString();

    let color = saturation === `0%` ? 0 : 1;
    let avatarAndBkg = avatarSet.textContent + bkg_clr + '-' + color;

    formData.append('action', action);
    formData.append('password', password);
    formData.append('avatar', avatarAndBkg);
    
    signIn(formData); 

   // searchIfUserExist(formData);
  }  
  return;
});




////  GO TO THE CONTROLLER WITH THE PARAMETERS TO SIGN IN ////
const signIn = async (formData) => {

  try {
    const res = await fetch('../Controller/users_controller.php', {
      method: 'POST',
      body: formData,
    });
    //console.log(res);
    if ( ! res.ok) throw new Error('Network response was not ok');

    const data = await res.json();

    if(data.response !== true){
      errorMessage.textContent = data.response;
      console.log(data.response);
      return;
    } //else window.location = '../index.php';

     action = 'logIn';
     formData.append('action', action);
     logIn(formData);

  } catch (error) {
    console.error('Error:', error);
  }   
}



const logIn = async (formData) => {

  try {
     
     const res = await fetch('../Controller/users_controller.php', {
        method: 'POST',
        body: formData,
     });
     //console.log(res);
     if ( ! res.ok) throw new Error('Network response was not ok');

     ////////////////////////////////////////////////////////////////
   
    
      window.location = '../index.php';
     ////////////////////////////////////////////////////////////////
     
    // window.location = '../index.php';
  } catch (error) {
     console.error('Error:', error);
  }
  
}



//// CHECK IF THE EMAIL IS VALID ////
const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};




















































//// GO TO THE CONTROLLER WITH THE PARAMETERS TO CHECK IF EMAIL OR LOGNAME DOES NOT ALREADY EXISTS ////
 
const searchIfUserExist = async (formData) => {
  
  try {
    const res = await fetch('../Controller/users_controller.php', {
      method: 'POST',
      body: formData,
    });
    //console.log(res);
    if ( ! res.ok) throw new Error('Network response was not ok');

    const data = await res.json();  

    if(data.response !== false){
      if(data.response.email === email) errorMessage.textContent = `This email already exists`;
      else if(data.response.logname === logname)  errorMessage.textContent = `This logname is already taken`;
      else errorMessage.textContent = data.response;
      return;
    }

    action = 'signIn';
    password = CryptoJS.SHA256(password).toString();

    let color = saturation === `0%` ? 0 : 1;
    let avatarAndBkg = avatarSet.textContent + bkg_clr + '-' + color;

    formData.append('action', action);
    formData.append('password', password);
    formData.append('avatar', avatarAndBkg);
    
    signIn(formData); 
 
  } catch (error) {
    console.error('Error:', error);
  }   
}