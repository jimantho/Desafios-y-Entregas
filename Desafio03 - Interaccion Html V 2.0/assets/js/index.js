var login = document.getElementById("ingresar"),
    overlay = document.getElementById("overlay"),
    loginFrame = document.getElementById("loginFrame"),
    btncerrarPopUp = document.getElementById("cerrarPopUp");

    login.addEventListener("click",function(){
        overlay.classList.add("active");
        loginFrame.classList.add("active");
    });

    btncerrarPopUp.addEventListener("click",function(){
        overlay.classList.remove("active");
        loginFrame.classList.remove("active");
    });

















