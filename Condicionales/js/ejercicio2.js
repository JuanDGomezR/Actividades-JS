// Escribe un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos

var a = Math.floor(Math.random() * 100)
var b = Math.floor(Math.random() * 100)
var c = Math.floor(Math.random() * 100)

console.log(`${a}, ${b}, ${c}`)

if (a == b && a == c) {
    console.log(`Los 3 numeros son iguales`)
} else if (a == b || a == c || b == c) {
    console.log(`Hay dos numeros iguales`)

} else console.log(`los 3 numeros son distintos`)