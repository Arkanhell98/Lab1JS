const prompt = require("prompt-sync")();

let contrasena = prompt("Digita tu contraseña (Debe tener 8 digitos, un número y una mayúscula): ");
let array_contr = contrasena.split("");

function validarLong(clave) {
   let longList = clave.length
   if (longList >= 8){
    return true
   }
   else{
    return false
   }
 }
function validarNum(clave){
    let nums = ['0','1','2','3','4','5','6','7','8','9']
    let numInList = clave.some(valor => nums.includes(valor))
    return numInList
 }
 function validarMayus(clave) {
    let upperContr = clave.join("").toUpperCase(); // Convertimos la clave a mayúsculas
    let upperArray = upperContr.split(""); // Convertimos en array
    let letterInList = clave.some(valor => valor === valor.toUpperCase() && isNaN(valor));
    return letterInList
}
function validarContrasena(clave) {
    let largo = validarLong(clave)
    let numero = validarNum(clave)
    let mayus = validarMayus(clave)
    valor = (largo * numero * mayus)
    return Boolean(valor)
}

if (validarContrasena(array_contr) === true){
    console.log("Correcto")
  }
  else if(validarLong(array_contr) === false){
    console.log("Son menos de 8 caracteres")
  }
  else if(validarNum(array_contr) === false){
    console.log("Te falta al menos 1 número");
  }
  else{
    console.log("Te falta al menos 1 mayúscula");
  }
  
