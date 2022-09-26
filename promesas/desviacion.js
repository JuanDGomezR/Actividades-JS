//propuesta

var arr = [], x = 4, prom, num = 0, potencia, sumatoria = 0, desv, exponente = 2, tam =5;

// funcion general
function desviacion(callback1, callback2, callback3, callback4){
    console.log("Desviacion estandar de un arreglo....");
    callback1();
    callback2();
    callback3();
    callback4();
}
//funciones de los callbacks
function arreglo(){
    setTimeout(() => {
        for (let i = 0; i < x; i++) {
            arr[i] = Math.round(Math.random() * 100);
        }
        console.log(`Arreglo generado: ${arr}`)
    }, 1000);
}

function promedio() {
    setTimeout(() => {
        var i = 0, suma = 0, ArrayLen = x; 
            while (i < ArrayLen) {
                suma = suma + arr[i++];
        }
        prom = suma / ArrayLen;
        console.log(`EL promedio del arreglo necesario para la desviacion es: ${prom}`)
    }, 2000);
}

function numerador() {
    setTimeout(() => {
        for (let i = 0; i < x; i++) {
            num = arr[i] - prom;
            potencia = Math.pow(num, exponente);
            sumatoria += potencia;
        }

    console.log(`El numerador para el calculo de la desviacion es: ${sumatoria}`);
    }, 3000);
}

function radicacion(){
    setTimeout(() => {
        desv = Math.sqrt(sumatoria / x);
        console.log(`la desviacion del arreglo es: ${desv}`);
    }, 5000);
}
//llamar callbacks
desviacion(promedio, numerador, radicacion, arreglo);

console.log("============================")
// Javascript program to calculate the standered deviation of an array

function desv(arr){
  // Creando la media con Array.reduce
  let media = arr.reduce((num1, num2)=>{
    return num1 + num2
  }, 0) / arr.length;
   
  // Asignación (valor - media) ^ 2 a cada elemento de la matriz
  arr = arr.map((valor)=>{
    return (valor - media) ** 2
  })
   
  // Cálculo de la suma de la matriz actualizada
  let suma = arr.reduce((num1, num2)=> num1+ num2, 0);
  
 // Cálculo de la varianza
 let varianza = suma / arr.length
  
 // Devolviendo la desviación estándar
 return Math.sqrt(suma / arr.length)
}
 
 console.log("verificador de desviacion")
console.log(desv([49,12,67,11]))