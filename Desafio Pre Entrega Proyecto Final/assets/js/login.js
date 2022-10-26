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
  
  /*Segundo Desafío utilizando funciones*/
  
  function pedirDatos() {
    let cantIngrantes2 = parseInt(document.getElementById("cantidad").value);
    let integrantesTotales = [];
    for ( let i = 0; i < cantIngrantes2; i++) {
        integrantesTotales[i] = [prompt("Ingresa Autor: ")];
        integrantesTotales[i] = [prompt("Ingreso Titulo:")];
        integrantesTotales[i] = [prompt("Ingrese n° Páginas :")];
        integrantesTotales[i] = [prompt("Cargar archivo :")];
    }
  
  }
  
  function validarDatos() {};
  
  