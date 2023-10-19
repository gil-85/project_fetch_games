/* class User {
  
  #email = '';
  #password = '';


  
  constructor(email, password) {
    this.setEmail(email);
    this.setPassword(password);
  }

  getEmail(){
    return this.#email;
  }
  setEmail(email){
    this.#email = email;
    alert('set email');
  }


  getPassword(){
    return this.#password;
  }
  setPassword(password){
    this.#password = CryptoJS.SHA256(password).toString();
    alert('set password');
  }
}
 */