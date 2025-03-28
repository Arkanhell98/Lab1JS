const prompt = require("prompt-sync")();

calificaciones = []
function calcularPromedio(notas){
let contador = 1
while (contador <= 5){
    nota = prompt("Digita la nota: ");
    nota = parseFloat(nota);
    notas.push(nota);
    contador ++
}
let sum = 0
for(let n of notas){
    sum = sum + n
}
let cantidadNotas = notas.length
let promedio = sum / cantidadNotas
console.log("El promedio del estudiante es: " + promedio.toFixed(2))
}

calcularPromedio(calificaciones)