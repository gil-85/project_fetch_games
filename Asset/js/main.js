const currentURL = window.location.href;
const header = document.querySelector('header');


//// █ GET THE API KEY █ ////
let apikey =``;
const fetchKey = async (func) => {
  try{
    const res = await fetch('../prod.env.php');
    if ( ! res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    apikey = data.apikey;
    func();
    } catch (error){
    console.error('Error:', error);
  }
}

//// LINK TO THE HOME PAGE ON THE HEADER TITLE IF NOT ALREADY ON THE HOME PAGE //// 
if( ! currentURL.includes(`index`))   
  header.innerHTML =
  `
  <a href="../index.php">
    <h1>Project Games api</h1>
  </a> 
  `;

/*header.innerHTML += 
`
<span id="user_email">Not connected </span>
<br> 
<span style="font-size: .6em; color:cyan;">user0@gmail.com</span>
`;
*/
//// DISPLAY THE USER INFO IF CONNECTED ////
if(sessionStorage.getItem(`user_email`)){
  alert(22);
  document.querySelector(`#user_email`).textContent = sessionStorage.getItem(`user_email`);
}


//// KEEP THE THEME CHOOSED ON EVERY PAGE USING THE LOCALSTORAGE ////
const theme = localStorage.getItem('theme');
if (theme !== null) 
  if (theme === 'Light theme')
    document.body.classList.add('light-theme');
 

//console.log(`main.js`);