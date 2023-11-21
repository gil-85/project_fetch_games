const textInput = document.querySelector(`input[type=text]`);
const passwordInput = document.querySelector(`input[type=password]`);
const errorMessage = document.querySelector(`#p-error_message`);
const formData = new FormData();

document.querySelector(`form`).addEventListener(`submit`,(e)=>{
   e.preventDefault();
   
   emailogname = textInput.value;
   password = passwordInput.value;
   errorMessage.textContent = ``;
   
   action = 'checklog';

   formData.append('action', action);
   formData.append('emailogname', emailogname);  // must add security for text input !!
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
      //console.log(res);
      if ( ! res.ok) throw new Error('Network response was not ok');

      const data = await res.json();  
      console.log(data);


      if(data.response === false){
         errorMessage.textContent = `Inputs incorrects`;
         return;
      }else{
        if(data.response.email === emailogname || data.response.logname === emailogname){ 
           errorMessage.textContent = `Log ok`; 
           
           action = 'loging';
           formData.append('action', action);
           logIng(data.response);
        }
        else errorMessage.textContent = data.response; 
      }
   
   } catch (error) {
      console.error('Error:', error);
   }   
}


const logIng = async (response) => {

   console.log(response.user_id, action);

   formData.append('id', response.user_id);

   try {
      
      const res = await fetch('../Controller/users_controller.php', {
         method: 'POST',
         body: formData,
      });
      //console.log(res);
      if ( ! res.ok) throw new Error('Network response was not ok');

      const data = await res.json();  
      console.log(data);
      errorMessage.textContent = data.response; 

   } catch (error) {
      console.error('Error:', error);
   }
   
}
//alert(`log in`);