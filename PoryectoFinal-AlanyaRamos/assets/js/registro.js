/* BD */
// localStorage.setItem("prueba","valorPrueba");
let arrayParticipante = [];
// localStorage.setItem("registroUsuarios",JSON.stringify(arrayParticipante));

/* Variables */
let arrayRegistroUsuarios;

/* Incorporando Array Objetos*/
class Participante {
    constructor(usuario, contrasena, dni, nombre, edad, sexo,estadoSesion) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.dni = dni;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoSesion = estadoSesion;
    };
    cambiarNombre() {
        let nombre = "hola nombre";
        return nombre;
    }
};

function Registrar() {

    var usuarioA = document.getElementById("usuario").value;
    var contrasenaA = document.getElementById("contrasena").value;
    var dniA = document.getElementById("dni").value;
    var nombreA = document.getElementById("nombre").value;
    var edadA = document.getElementById("edad").value;
    var sexoA = document.getElementById("sexo").value;
    var estadoSesion = "";

    arrayParticipante.push(new Participante(usuarioA, contrasenaA, dniA, nombreA, edadA, sexoA,estadoSesion));
    localStorage.setItem("registroUsuarios",JSON.stringify(arrayParticipante));

    arrayRegistroUsuarios = JSON.parse(localStorage.getItem("registroUsuarios"));
    console.log(arrayRegistroUsuarios);

    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("sexo").value = "";

    // document.getElementById("mensaje").innerHTML = "Registrado Correctamente";
    Swal.fire({
        text: 'Registrado Correctamente'})

};

function verRegistro() {
    for (var participante of arrayParticipante) {
        document.getElementById("nuevoUsuario").innerHTML = participante.usuario;
        document.getElementById("nuevoContrasena").innerHTML = participante.contrasena;
        document.getElementById("nuevoNombre").innerHTML = participante.dni;
        document.getElementById("nuevoDni").innerHTML = participante.nombre;
        document.getElementById("nuevoEdad").innerHTML = participante.edad;
        document.getElementById("nuevoSexo").innerHTML = participante.sexo;
    }

}
/* ejecutando funciones y/o eventos */
document.getElementById("registrar").onclick = Registrar;
document.getElementById("verRegistro").onclick = verRegistro;
