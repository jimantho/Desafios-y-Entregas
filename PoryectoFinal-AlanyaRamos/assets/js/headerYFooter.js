// /* variables
const footer = document.querySelector("footer");
const header = document.querySelector("header");
const htmlPopUp = document.getElementById("cajitaPopUp");

let piePagi, encabezado, popUp;

function piePag() {
  piePagi = `
  <!-- Section: Social media -->
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <!-- Left -->
    <div class="me-5 d-none d-lg-block">
      <span>Descubre nuestra redes sociales:</span>
    </div>
    <!-- Left -->

    <!-- Right -->
    <div>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 link-secondary">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <!-- Right -->
  </section>
  <!-- Section: Social media -->

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>Diver Ninos
          </h6>
          <p>
            Somos una comunidad que compartimos cosas agradables para los ninos, como cuentos, fabulas
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Lo que Ofrecemos
          </h6>
          <p>
            <a href="#!" class="text-reset">Fabulas</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Videos Fabulas</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Historias</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Juguetes</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Precio</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Configuracion</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Carrito</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Ayuda</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> Peru, Lima, PE</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            anyela@gmail.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> 931 193 999</p>
          <p><i class="fas fa-print me-3 text-secondary"></i> + 01 234 567 89</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->

  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.025);">
    © 2022 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">diverninos.com</a>
  </div>
  <!-- Copyright -->
  `;
  footer.innerHTML = piePagi;
};
function mostrarHeader() {
  encabezado = `
<nav>
      <!-- navbar -->
      <!-- logo -->
      <h1>DiverNiños</h1>
      <!-- menu -->
      <ul class="menu">
        <li class="menu__item">
          <a href="/index.html" class="menu__item__a">Home</a>
        </li>
        <li class="menu__item">
          <a href="" class="menu__item__a">Nosotros</a>
        </li>
        <li class="menu__item">
          <a class="menu__item__a" href="#">Nuestros Niños</a>
        </li>
        <li class="menu__item">
          <a class="menu__item__a" href="/assets/pages/fabulasVideo.html">Fábulas</a>
        </li>
        <li>
          <!-- iniciar sesion -->
          <div class="icons">
            <div class="iconsUser">
              <a href="" class="icons__user"><i class="fa-solid fa-user fa-2x"></i></a>
              <button class="btnUsario" id="cuentaUsuario"> Mi Cuenta</button>
              <a href="" class="icons__user" id="cerrarSesion"><i
                  class="fa-solid fa-arrow-right-to-bracket fa-2x"></i></a>
            </div>
          </div>
        </li>
      </ul>
</nav>
`;
  header.innerHTML = encabezado;
};
function mostrarHtmlPopUp(){
  popUp = `

  <div class="overlay" id="overlay">
    <div id="loginFrame">
      <a href="" id="cerrarPopUp"><i class="fa-solid fa-xmark"></i></a>
      <form action="">
        <div class=" formCajas user">
          <label for="">Email o Usuario </label>
          <div>
            <input type="email" name="" id="user" required class="datos" />
          </div>
        </div>
        <div class="formCajas password">
          <label for="">Contraseña </label>
          <div>
            <input type="password" name="" id="pwd" required class="datos" />
          </div>
        </div>
        <div class="formCajas btn">
          <input value="Ingresar" class="btnLogin" type="button" id="login">
        </div>
      </form>
    </div>
  </div>
  
  `;
  htmlPopUp.innerHTML = popUp
};

piePag();
mostrarHeader();
mostrarHtmlPopUp();

