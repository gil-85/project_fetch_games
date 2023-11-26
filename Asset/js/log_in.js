const textInput = document.querySelector(`input[type=text]`);
const passwordInput = document.querySelector(`input[type=password]`);
const errorMessage = document.querySelector(`#p-error_message`);
const formData = new FormData();

document.querySelector(`form`).addEventListener(`submit`,(e)=>{
   e.preventDefault();
   
   emailogname = textInput.value;
   password = passwordInput.value;
   errorMessage.textContent = ``;
 
   if( ! isValidEmailogname(emailogname)){
      errorMessage.textContent= `Wrong email or logname and / or password (TEST NOT OK)`;
    return;
   } 

    
   if(errorMessage.textContent === '') {
     action = 'searchUser';
     password = CryptoJS.SHA256(password).toString();
     console.log(password);
     formData.append('action', action);
     formData.append('emailogname', emailogname);  // must add security for text input !!
     formData.append('password', password);

     searchUser(formData);
   }
   
   return;
 
});

const searchUser = async (formData) => {

   try {
      const res = await fetch('../Controller/users_controller.php', {
         method: 'POST',
         body: formData,
      });
      //console.log(res);
      if ( ! res.ok) throw new Error('Network response was not ok');

      const data = await res.json();  
      console.log(data);


      if(data.response === false){
         errorMessage.textContent = `Wrong email or logname and / or password`;
         return;
      }else{
        if(data.response.email === emailogname || data.response.logname === emailogname){ 
           
           action = 'logIn';
           formData.append('action', action);
           logIn(data.response);
        }
        else errorMessage.textContent = data.response; 
      }
   
   } catch (error) {
      console.error('Error:', error);
   }   
}


const logIn = async (response) => {

   console.log(response.user_id, action);

   formData.append('id', response.user_id);

   try {
      
      const res = await fetch('../Controller/users_controller.php', {
         method: 'POST',
         body: formData,
      });
      //console.log(res);
      if ( ! res.ok) throw new Error('Network response was not ok');

      ////////////////////////////////////////////////////////////////
      //const data = await res.json();  
      // errorMessage.textContent = data.response; 

      window.location = '../index.php';
///////////////////////////////////////////////////////////////////

   } catch (error) {
      console.error('Error:', error);
   }
   
}


//// CHECK IF THE EMAIL OR OGNAME IS VALID ////
const isValidEmailogname = (emailogname) => {
   //const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   const lognamePattern = /^[a-zA-Z0-9_-]{4,16}$/;

   return lognamePattern.test(emailogname) || emailPattern.test(emailogname);
};



