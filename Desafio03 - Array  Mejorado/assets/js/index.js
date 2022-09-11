/*Simulador Interactivo por el momento aplicaria 3 funciones */

/*Iniciar Sesión, ingresar datos de integrantes y por último validar
 estos datos para evaluar si participarían del sorteo */

/*Primer desfio utilizando ciclos*/
function login() {
  let user = "aaa@gmail.com";
  let password = "123456";

  let userLogin = document.getElementById("user").va;
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
    integrantesTotales[i] = [prompt("Nombre del integrante n: " + (i + 1))];
    integrantesTotales[i] = [prompt("Ingrese DNI:")];
    integrantesTotales[i] = [prompt("Ingrese Edad:")];
    integrantesTotales[i] = [prompt("Ingrese Sexo:")];
  }

}

function validarDatos() {};

















