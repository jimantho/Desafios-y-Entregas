/*Primer desfio utilizando ciclos*/
function login() {
    let user = "aaa@gmail.com";
    let password = "123456";
  
    let userLogin = document.getElementById("user").value;
    let pwdLogin = document.getElementById("pwd").value;
    if ((user == userLogin) & (password == pwdLogin)) {
      window.location = "/assets/pages/home.html";
    } else {
      alert("Contraseña o usuario incorrecto");
    }
  }
  
    
  function validarDatos() {};
  
document.getElementById("login").onclick = login;


  