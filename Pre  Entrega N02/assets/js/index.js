var login = document.getElementById("ingresar"),
    overlay = document.getElementById("overlay"),
    loginFrame = document.getElementById("loginFrame"),
    btncerrarPopUp = document.getElementById("cerrarPopUp");



login.addEventListener("click", function () {
    console.log("holaa");
    overlay.classList.add('active');
    loginFrame.classList.add("active");
});

btncerrarPopUp.addEventListener("click", function () {
    console.log("hola");
    overlay.classList.remove("active");
    loginFrame.classList.remove("active");
});




/*Primer desfio utilizando ciclos*/
function iniciarSesion() {
    console.log("jollala");
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
  
document.getElementById("login").onclick = iniciarSesion;














