// /* variables
let usuariosArray, inputUsuario, inputContrasena, usuario, loginUsuario, nombreUsuario, usuarios, iconCerrarSesion;

/* leyendo datos de etiquetas */
loginUsuario = document.getElementById("login");
iconCerrarSesion = document.getElementById("cerrarSesion");

/* manejo de popUp login */
var login = document.getElementById("cuentaUsuario"),
  overlay = document.getElementById("overlay"),
  loginFrame = document.getElementById("loginFrame"),
  btncerrarPopUp = document.getElementById("cerrarPopUp");

/* leyendo datos */
usuarios = JSON.parse(localStorage.getItem("registroUsuarios"));
console.log(usuarios);

/* funciones */
function mostrarPopUp() {
  overlay.classList.add("active");
  loginFrame.classList.add("active");
};
function mostrarPagina() {
  window.location = "/assets/pages/miEspacio.html"
};
function buscarUsuario() {
  const usuarioExiste = usuarios.find(usuario => usuario.estadoSesion === "1");
  usuarioExiste ? mostrarPagina() : mostrarPopUp()
};
function usuarioExis() {
  const usuarioExiste = usuarios.find(usuario => usuario.estadoSesion === "1");
  usuarioExiste ? mostrarPagina() : mostrarPopUp();
};
function mostrarEspacio() {
  usuarios.length < 0 ? mostrarPopUp() : usuarioExis();
};

/* ejecutando eventos */
login.addEventListener("click", function () {
  usuarios === null ? mostrarPopUp() : mostrarEspacio();
});
iconCerrarSesion.addEventListener("click", function cerrarSesion() {
  localStorage.clear();
});
btncerrarPopUp.addEventListener("click", function () {
  overlay.classList.remove("active");
  loginFrame.classList.remove("active");
});
loginUsuario.addEventListener("click", (e) => {
  inputUsuario = document.getElementById("user").value;
  inputContrasena = document.getElementById("pwd").value;
  iniciarSesion(inputUsuario, inputContrasena);
});

/*Funciones*/
const iniciarSesion = (inputUsuario, inputContrasena) => {
  usuariosArray = JSON.parse(localStorage.getItem("registroUsuarios"));
  if (localStorage.length === 0) {
    Swal.fire({
      title: 'No tienes cuenta!',
      text: 'Registrate dando click al boton Unete a Nosotros',
      confirmButtonText: "Ok",
    });
    overlay.classList.remove("active");
    loginFrame.classList.remove("active");
  } else {
    usuariosArray.forEach(usuario => {
      if ((usuario.usuario === inputUsuario) & (usuario.contrasena === inputContrasena)) {
        window.location = "/assets/pages/miEspacio.html";
        usuario.estadoSesion = "1";
        localStorage.setItem("registroUsuarios", JSON.stringify(usuariosArray));
      }
      else {
        Swal.fire({
          title: 'Contraseña Incorrecta!',
          text: 'Vuelve a intentarlo u obtén un nuevo código para iniciar Sesion',
          icon: 'error',
          confirmButtonText: "Ok",
        });
        overlay.classList.remove("active");
        loginFrame.classList.remove("active");
      };
    });
  }
};

/* Mostrado Nombre Perfil */
nombreUsuario = document.getElementById("cuentaUsuario");
let arrayUsuarios = JSON.parse(localStorage.getItem("registroUsuarios"));
arrayUsuarios.forEach(usuario => {
  if (usuario.estadoSesion === "1") {
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
    window.location = "/assets/pages/miEspacio.html";
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










