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
    let nombre ="hola nombre";
    return nombre;
    }
};

let arrayParticipante =[];

function Registrar(){

    var usuarioA = document.getElementById("usuario").value;
    var contrasenaA = document.getElementById("contrasena").value;
    var dniA = document.getElementById("dni").value;
    var nombreA = document.getElementById("nombre").value;
    var edadA = document.getElementById("edad").value;
    var sexoA = document.getElementById("sexo").value;
    
    arrayParticipante.push(new Participante(usuarioA,contrasenaA,dniA,nombreA, edadA,sexoA));
    
    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";
    document.getElementById("dni").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("sexo").value = "";

    document.getElementById("mensaje").innerHTML = "Registrado Correctamente";
    
} ;



function verRegistro(){
    for(var participante of arrayParticipante){
        console.log(`usuario: ${participante.usuario}`);

        document.getElementById("nuevoUsuario").innerHTML = participante.usuario;
        document.getElementById("nuevoContrasena").innerHTML = participante.contrasena;
        document.getElementById("nuevoNombre").innerHTML = participante.dni;
        document.getElementById("nuevoDni").innerHTML = participante.nombre;
        document.getElementById("nuevoEdad").innerHTML = participante.edad;
        document.getElementById("nuevoSexo").innerHTML = participante.sexo;
    }

}

document.getElementById("registrar").onclick = Registrar;
document.getElementById("verRegistro").onclick = verRegistro;
