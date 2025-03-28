const prompt = require("prompt-sync")();
const listaUsuarios =[
    {nombre: "Ana", edad: 45},
    {nombre: "Gabriel", edad: 30},
    {nombre: "Juan", edad: 17},
    {nombre: "Leonela", edad: 21},
    {nombre: "Felipe", edad: 16},
    {nombre: "Tatiana", edad: 19}
]

let usuario = Number(prompt("Escribe la edad que deseas consultar: "))
function filtrarUsuarios(anio,inventario){
    for (let i = 0; i < inventario.length; i++){ /// ◄ Explicación for (contador de; limite de la iteración; aumento del contador)
        if(anio < inventario[i].edad){ ///  ◄ Recuerde llamar siempre la lista mediante el formato lista[item].propiedad
           console.log(inventario[i].nombre,`es mayor de ${anio} años.`)
        }
    }
    console.log ("No hay mas usuarios mayores")
}

filtrarUsuarios(usuario,listaUsuarios)
