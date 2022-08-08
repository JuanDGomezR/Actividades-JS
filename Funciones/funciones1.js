function impresora() {
  console.log("Soy una impresora... que desea imprimir");
}

impresora();

//..............................

function sumarVector() {

var vector = [];
var sum = 0;
    for (let i = 0; i < 2; i++) {
        vector[i] = Math.round(Math.random()*100);
    }
    for (let i = 0; i < vector.length; i++) {
        sum += vector[i];
    }

    console.log(vector);
    console.log(sum);
}

console.log(sumarVector());
