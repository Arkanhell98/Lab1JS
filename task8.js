const prompt = require("prompt-sync")();

let valorCOP = prompt("Digita la cantidad que deseas convertir: ")
let monedaConvertir = prompt("Digita la moneda a la que quieres convertir (USD o EUR): ")

async function convertirMoneda(monto,monedaDestino){
    let apiMoneda = await fetch("https://api.exchangerate-api.com/v4/latest/COP")
        let dato = await apiMoneda.json();
    if(monedaDestino === "USD"){
        let tasa = dato.rates.USD;
        let conversion1 = monto * tasa;
        console.log(`Serían $${conversion1.toFixed(2)} USD`)
    } else if(monedaDestino === "EUR"){
        let tasa = dato.rates.EUR;
        let conversion2 = monto * tasa;
        console.log(`Serían $${conversion2.toFixed(2)} EUR`)
    }
    else{
        console.log("No contamos con esa moneda")
    }
}

convertirMoneda(valorCOP,monedaConvertir)