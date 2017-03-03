var titulo = document.getElementById("form-signin-heading");
var email = document.getElementById("inputEmail");
var contraseña = document.getElementById("inputPassword");
var recordar = document.getElementsByTagName("span")[0];
var boton = document.getElementsByClassName("btn")[0];

function traduccion(){
  titulo.innerHTML = "Por favor inicia seción";
  email.placeholder = "Correo electrónico";
  contraseña.placeholder = "Contraseña";
  recordar.innerHTML= "Recordar datos";
  boton.innerHTML = "Iniciar sesión";
}

var muestra =document.getElementById("result");
//var bot= document.getElementsByClassName("btn")[0];
function respuestas(){
//  var e = document.getElementById("inputEmail").value;
  //var p =  document.getElementByClassName("inputPassword").value;

muestra.innerHTML= "El correo electronico ingresado es " + email.value + "<br>" +
 "La clave ingreada es " + contraseña.value
}
 traduccion();
