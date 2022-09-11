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

/* Incorporando Array Objetos*/
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
    console.log("hola")
  }

};

var arrayParticipante =[];

function Registrarse(){
  alert("hola");
  console.log("hola");
  // var usuarioA = prompt("Ingrese Usuario");
  // var contrasenaA = prompt("Ingrese su contraseña");
  // var dniA = prompt("Ingrese Dni");
  // var nombreA = prompt("Ingrese nombre");
  // var edadA = prompt("Ingrese edad");
  // var sexoA = prompt("Ingrese sexo")

  // arrayParticipante.push(new Participante(usuarioA,contrasenaA,dniA,nombreA,edadA,sexoA));
  // arrayParticipante.push(new Participante("usuarioA","contrasenaA","dniA","nombreA","edadA","sexoA"));
  // console.log("hola");
  // alert("Datos registrado correctamente");
  // window.location = "/assets/pages/registro.html";
}

function verRegistro(){
  document.write("hola");
  for(var participante of arrayParticipante){
    // document.write("hola" + participante.usuario);
    document.write("contraseña: " + participante.cambiarNombre())
  }

}
















