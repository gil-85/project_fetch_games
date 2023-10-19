document.querySelector(`form`).addEventListener(`submit`,(e)=>{
  e.preventDefault();
  let errorMessage = document.querySelector(`#p-error_message`);
  let email = document.querySelector(`input[type=email]`).value;
  
  if(isValidEmail(email)){
    const aPassword = document.querySelectorAll(`input[type=password]`);
    if ( ! currentURL.includes(`log_in`)) {

      if(getUser(email)){
        errorMessage.textContent = `This email already exist`;
        return;
      }

      if(aPassword[0].value !== aPassword[1].value){
        errorMessage.textContent= `The passwords don't match`;
          return;
      }
      const user = new User(email, aPassword[0].value);
      setUser(user, 30);
    }else{
      errorMessage.textContent= `Connexion ERR0R`; 
      if( ! getUser(email)) return;
      else{
        let hashedPassword = CryptoJS.SHA256(aPassword[0].value).toString();
        if(hashedPassword !== getUser(email).password) return;
      }
    }
  }
  connected(email);
  return;
});


const isValidEmail = (email) => {
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(email);
};
 


function connected(email){

  sessionStorage.setItem(`user_email`, email);
  window.location = `../index.html`;
}
//alert('Connexion ok');