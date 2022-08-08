//Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número exceda los límites emita un mensaje y finalice el programa


let numero = parseInt(prompt(`Digite un numero no superior a 9999`))
let contador = 0;
if (numero > 9.999) {
    console.log(`El numero ${numero} es superior a 9999`)
} else while (numero >= 1 && numero <= 9.999) {
    contador = contador + 1
    numero = (numero / 10)
}
console.log(`El numero tiene ${contador} digitos <br>`)