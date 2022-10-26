// /* variables
let usuariosArray, inputUsuario, inputContrasena, usuario, loginUsuario, nombreUsuario;

/* leyendo datos de etiquetas */
loginUsuario = document.getElementById("login");

/* manejo de popUp */
var login = document.getElementById("ingresar"),
  overlay = document.getElementById("overlay"),
  loginFrame = document.getElementById("loginFrame"),
  btncerrarPopUp = document.getElementById("cerrarPopUp");

login.addEventListener("click", function () {
  overlay.classList.add('active');
  loginFrame.classList.add("active");
});

btncerrarPopUp.addEventListener("click", function () {
  overlay.classList.remove("active");
  loginFrame.classList.remove("active");
});

/*Funciones*/
const iniciarSesion = (inputUsuario, inputContrasena) => {
  usuariosArray = JSON.parse(localStorage.getItem("registroUsuarios"));

  usuariosArray.forEach(usuario => {
    if ((usuario.usuario === inputUsuario) & (usuario.contrasena === inputContrasena)) {
      window.location = "/assets/pages/home.html";
      usuario.estadoSesion = "1";
      localStorage.setItem("registroUsuarios", JSON.stringify(usuariosArray));


    } else {
      Swal.fire({
        title: 'Contraseña Incorrecta!',
        text: 'Vuelve a intentarlo u obtén un nuevo código para iniciar Sesion',
        icon: 'error',
        confirmButtonText: "Ok",
      })

    };
  });
};

/* ejecutando eventos */
loginUsuario.addEventListener("click", (e) => {
  inputUsuario = document.getElementById("user").value;
  inputContrasena = document.getElementById("pwd").value;
  iniciarSesion(inputUsuario, inputContrasena);
});

/* Mostrado Nombre Perfil */
nombreUsuario = document.getElementById("cuentaUsuario");

let arrayUuarios = JSON.parse(localStorage.getItem("registroUsuarios"));

arrayUuarios.forEach(usuario => {
  if (usuario.estadoSesion === "1") {
    console.log("iniciado eres tu");
    nombreUsuario.textContent = usuario.nombre;
  }
});




/* ==========================================================
BACKUP 
==========================================================

function iniciarSesion() {
  console.log("jollala");
  let user = "aaa@gmail.com";
  let password = "123456";
----------------------------------------------------------
  let userLogin = document.getElementById("user").value;
  let pwdLogin = document.getElementById("pwd").value;
  if ((user == userLogin) & (password == pwdLogin)) {
    window.location = "/assets/pages/home.html";
  } else {
    alert("Contraseña o usuario incorrecto");
  }
}
----------------------------------------------------------
function validarDatos() { };
ver el tipo de evento
inputUsuario1 =document.getElementById("user");
inputUsuario1.addEventListener("keyup",(e) => {
console.log(e);
}
);
otra forma de ejecutar una funcion y un evento
*/










