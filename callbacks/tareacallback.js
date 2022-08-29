//propuesta

var arr = [], x = 6, prom, num = 0, potencia, sumatoria = 0, desv, exponente = 2;

function desviacion(callback1, callback2, callback3, callback4, vector, tam){
    console.log("Desviacion estandar de un arreglo....");
    callback1();
    callback2();
    callback3();
    callback4();
}

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

desviacion(promedio, numerador, radicacion, arreglo, arr, x);

console.log("============================")
// Javascript program to calculate the standered deviation of an array

function desv(arr){
  // Creando la media con Array.reduce
  let mean = arr.reduce((acc, curr)=>{
    return acc + curr
  }, 0) / arr.length;
   
  // Asignación (valor - media) ^ 2 a cada elemento de la matriz
  arr = arr.map((k)=>{
    return (k - mean) ** 2
  })
   
  // Cálculo de la suma de la matriz actualizada
  let sum = arr.reduce((acc, curr)=> acc + curr, 0);
  
 // Cálculo de la varianza
 let variance = sum / arr.length
  
 // Devolviendo la desviación estándar
 return Math.sqrt(sum / arr.length)
}
 
 console.log("verificador de desviacion")
console.log(desv([21,43,76,21,93,55]))

// el stock de productos

class Producto{
    constructor(nombre, precio, stock){
        this._nombre=nombre;
        this._precio=precio;
        this._stock=stock;
    }    
    get nombre(){
        return this._nombre;
    } 

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }
    get stock(){
        return this._stock;
    } 
    set stock(stock){
        return this._stock;
    }
}



var tienda = []
const prod1 = new Producto("papa", 1000, 10);
const prod2 = new Producto("arroz",1500, 20);
const prod3 = new Producto("salchicha", 2000, 30);
const prod4 = new Producto("pasta", 2500, 40);

function mostrarDatos(call1, call2, call3, elementos){
    tienda.push(prod1, prod2, prod3, prod4);
    console.log(`los productos que hay son: ${tienda}`);
}

function promedioProd() {
    setTimeout(() => {
        var i = 0, suma = 0, ArrayLen = tienda; 
            while (i < ArrayLen) {
                suma = suma + tienda[i++];
        }
        prome = suma / ArrayLen;
        console.log(`El promedio de los precios es: ${prome}`)
    }, 2000);
}

mostrarDatos(tienda)
