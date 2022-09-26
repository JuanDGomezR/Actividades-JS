//tiempos ciclos

//Mision por que cambia con let y var

for (let j = 0; j < 10; j++) {
  setTimeout(() => {
    console.log(j);
  }, 1000 * j);
}
setInterval(() => {
  console.log("Amo el SENA");
}, 1000);

//repetir con el intervalo de 2 segundos

let timerId = setInterval(() => console.log("tick"), 2000);

//despues de 5 sgundos parar
setTimeout(() => {
  clearInterval(timerId);
  console.log("stop");
}, 5000);

//arreglo que se llene con 15 elementos se imprima infinitamente

var vec=[]
for (let i = 0; i < 100; i++) {
    vec[i]= Math.round(Math.random() * 100)
}

var k=0;
    setInterval(() => {
        console.log(vec[k])
        k++;
        k==10?k=0:k=k;
    }, (100));