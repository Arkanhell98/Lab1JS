const prompt = require("prompt-sync")();
const fraseUsuario = prompt("Escribe una frase: ")

function contarPalabras(frase) {
    let wordList = frase.split(" ")
    let numWord = wordList.length
    console.log(`Tu frase tiene ${numWord} palabras`);  
    
}
contarPalabras(fraseUsuario)