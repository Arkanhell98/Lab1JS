const prompt = require("prompt-sync")();

function calcularPropina(total,porcentaje) {
    por_prop = (total * porcentaje)/100;
    vlr_pagar = total + por_prop
    console.log("El total a pagar es: " + vlr_pagar);
}
let valor1 = Number(prompt("Total de la cuenta: "))
let prop1 = Number(prompt("Porcentaje de la propina: "))

calcularPropina(valor1, prop1)