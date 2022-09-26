n = Math.round(Math.random() * (25 - 5) + 5);
function numeritos(arreglo) {
  var numero = [];
  for (let i = 0; i < arreglo; i++) {
    numero[i] = Math.round(Math.random() * (25 - 5) + 5);
  }
  console.log(numero);
}

function numeroUno(arreglo) {
  let nume = [];
  for (let i = 0; i < arreglo; i++) {
    nume[i] = 1;
  }
  console.log(nume);
}

setTimeout(numeritos,3000,n)
numeroUno(n)
console.log("3 segundos despues")
