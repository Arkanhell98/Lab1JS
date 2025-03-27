const prompt = require("prompt-sync")();
const inventarioLista = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 },
    { nombre: "Pantalon", precio: 75 },
    { nombre: "Corbata", precio: 15 }
];
let producto = prompt("Escribe tu producto: ");
function buscarProducto (nombre, inventario){
    for (let i = 0; i < inventario.length; i++) {
        if (nombre == inventario[i].nombre){
            console.log("el producto si existe");
            return true
        }
    }
    console.log("el producto no existe");
    return null
}
buscarProducto(producto, inventarioLista);