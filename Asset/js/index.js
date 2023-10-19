const btnMode = document.querySelector('#btn-mode');
const linkConnexion = document.querySelectorAll('.link-connexion');
const btnDisconnect = document.querySelector(`#btn-disconnect`);
const linkFavories = document.querySelector('#link_favories')

//// THEME CONTROLS ////
if (document.body.classList.contains('light-theme')) btnMode.textContent = 'DARK THEME';
    
btnMode.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  if (document.body.classList.contains('light-theme')){
    localStorage.setItem('theme', 'Light theme');
    btnMode.textContent = 'DARK THEME';
  }else{
    localStorage.setItem('theme', 'Dark theme');
    btnMode.textContent = 'LIGHT THEME';
  }
});

//// CHANGE LINKS / BUTTON WETHER WE ARE CONNECTED OR NOT ////
if(sessionStorage.getItem(`user_email`)){
  btnDisconnect.classList.remove(`ghost`);
  linkFavories.classList.remove(`ghost`);
  linkConnexion[0].classList.add(`ghost`);
  linkConnexion[1].classList.add(`ghost`);   
} 

//// DISCONNECTION ////
btnDisconnect.addEventListener(`click`, ()=>{
  sessionStorage.setItem(`user_email`, ``);
  document.querySelector(`#user_email`).textContent = 'Not connected';
    btnDisconnect.classList.add(`ghost`);
    linkFavories.classList.add(`ghost`);
    linkConnexion[0].classList.remove(`ghost`);
    linkConnexion[1].classList.remove(`ghost`); 
}); 

//// PREPARE THE DATES INFOS AND LINKS FOR PRESET RESEARCHES  ////
const currentDate = new Date();
const year = currentDate.getFullYear();   
const month = currentDate.getMonth() +1;     
const day = currentDate.getDate();        

const today = `${year}-${month < 10 ? `0`+ month : month}-${day < 10 ? `0` + day : day}`;
const lastYear = `${year - 1}-${month < 10 ? `0`+ month : month}-${day < 10 ? `0` + day : day}`;
const future = `${year + 2}-${month < 10 ? `0`+ month : month}-${day < 10 ? `0` + day : day}`;

const presetLinks =  
  `
    <a href="View/list.php?title=Last%20releases&dates=${lastYear},${today}">LAST RELEASES</a>
    <a href="View/list.php?title=Future%20releases&dates=${today},${future}">FUTURE RELEASES</a>
  `;
 
 document.querySelector('nav').insertAdjacentHTML(`afterbegin`, presetLinks);
