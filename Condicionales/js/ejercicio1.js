//Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el valor del medio es 11. No use operadores lógicos

var x = Math.floor(Math.random() * 100)
var y = Math.floor(Math.random() * 100)
var z = Math.floor(Math.random() * 100)

console.log(`${x}, ${y}, ${z}`)

if (x < y) {
    (x > z)
    console.log(`El numero del medio es: ${x}`)
} else if (y > z) {
    console.log(`El numero del medio es: ${y}`)

} else console.log(`El numero del medio es: ${z}`)