const prompt = require("prompt-sync")();


function retirarDinero() {
    let saldo = Number(prompt("Digite su saldo actual: "))
    let retiro = Number(prompt("Digite el monto que quiere retirar: "))
    
    if(saldo > retiro){
        let nuevoSaldo = saldo - retiro
        console.log(`Su nuevo saldo es ${nuevoSaldo}`)
        } 
        else{
            console.log("Fondos Insuficientes")
        }
}

retirarDinero()