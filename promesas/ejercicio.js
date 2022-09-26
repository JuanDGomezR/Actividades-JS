//Escriba un settimeout dentro de un ciclo que se repita n veces, imprima la variable del ciclo dentro del settimeoput, luego en otra ejecucion fuera del settimeout y explique el comportamiento. Alterne el ejercicio utilizando LET y VAR en la variable del ciclo.

var ciclo1 = Math.round(Math.random() * 100)
let ciclo2 = Math.round(Math.random() * 100)
let numeros = Math.round(Math.random() * 100)

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(`el ciclo 1 con timeout ${ciclo1}`)
        console.log(`el ciclo 2 con timeout ${ciclo2}`)
    },5000);

    console.log(`el ciclo sin timeout ${numeros}`)
}

//arreglo s e va a llenar con numeros del 20 al 80

var numero = [];
for (let i = 0; i < 20; i++) {
  numero[i] = Math.round(Math.random() * (80 - 20) + 20);
  setTimeout(() => {
    console.log(numero)
  }, 10000);
}

console.log(`Arreglo: ${numero}`);
