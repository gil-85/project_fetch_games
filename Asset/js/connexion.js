document.querySelector(`form`).addEventListener(`submit`,(e)=>{
  e.preventDefault();
  let errorMessage = document.querySelector(`#p-error_message`);
  let email = document.querySelector(`input[type=email]`).value;
  

  if(isValidEmail(email)){
    const aPassword = document.querySelectorAll(`input[type=password]`);
//// VERIFY THAT THE PASSWORDS MATCH IF IN SIGN UP ////    
    if ( ! currentURL.includes(`log_in`)) {
      if(aPassword[0].value !== aPassword[1].value){
        errorMessage.textContent= `The passwords don't match`;
          return;
      }
    }
});

//// CHECK IF THE EMAIL IS VALID ////
const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
 

function connected(email){
  sessionStorage.setItem(`user_email`, email);
  window.location = `../index.php`;
}
//alert('Connexion ok');