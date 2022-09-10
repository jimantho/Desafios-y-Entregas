/*Simulador Interactivo por el momento aplicaria 3 funciones */

/*Iniciar Sesión, ingresar datos de integrantes y por último validar
 estos datos para evaluar si participarían del sorteo */

/*Primer desafio*/
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

/*Segundo Desafío*/

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

/* 3ra Función */
function validarDatos() {};

/* Incorporando Array */
class Participante {
  constructor(usuario, contrasena, dni, nombre, edad, sexo){
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.dni= dni;
    this.nombre = nombre;
    this.edad= edad;
    this.sexo = sexo;
  };
  cambiarNombre(){
    return "hola";
  }

};
var arrayParticipante =[];

function Registrarse(){
  var usuario = prompt("Ingrese Usuario");
  var contrasena = prompt("Ingrese su contraseña");
  var dni = prompt("Ingrese Dni");
  var nombre = prompt("Ingrese nombre");
  var edad = prompt("Ingrese edad");
  var sexo = prompt("Ingrese sexo")

  arrayParticipante.push(new Participante(usuario,contrasena,dni,nombre,edad,sexo));
  alert("Datos registrado correctamente");
  window.location = "/assets/pages/registro.html";
}

function verRegistro(){
  document.write("hola");

  for(var participante of arrayParticipante){
    document.write("hola" + participante.usuario);
  }


}
















