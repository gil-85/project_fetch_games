const emailInput = document.querySelector(`input[type=email]`);
const passwordInput = document.querySelector(`input[type=password]`);
const errorMessage = document.querySelector(`#p-error_message`);
const formData = new FormData();

document.querySelector(`form`).addEventListener(`submit`,(e)=>{
   e.preventDefault();
   
   email = emailInput.value;
   password = passwordInput.value;
   errorMessage.textContent = ``;
   
   action = 'loging';

   formData.append('action', action);
   formData.append('email', email);
   formData.append('password', password);
   
    checkInputs(formData);

    //alert(`form ok`);
 

});

const checkInputs = async (formData) => {

   try {
      const res = await fetch('../Controller/users_controller.php', {
         method: 'POST',
         body: formData,
      });
      console.log(res);
      if ( ! res.ok) throw new Error('Network response was not ok');

      const data = await res.json();  
      console.log(data);


      if(data.response === false){
         errorMessage.textContent = `No user found`;
         return;
       }else{
         if(data.response.email === email){ 
            errorMessage.textContent = `Log ok`; 
            console.log(email);
         }
         else errorMessage.textContent = data.response; 
       }
   
   } catch (error) {
      console.error('Error:', error);
   }   
}
//alert(`log in`);