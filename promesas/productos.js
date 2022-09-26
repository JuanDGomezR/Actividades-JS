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
        return this._stock=stock;
    }
}



var tienda = []
const prod1 = new Producto("Televisor OLED 120hz 4K", 750000, 50);
const prod2 = new Producto("Televisor LCD 144hz 1080p",569000, 86);
const prod3 = new Producto("Televisor MICROLED 59 pulgadas", 1570000, 159);
const prod4 = new Producto("Televisor SUPERAMOLED 50 pulgadas", 2000000, 400);
tienda.push(prod1, prod2, prod3);

function mostrarDatos(callback1, callback2, callback3,callback4){
    callback1();
    callback2();
    callback3();
    callback4();
}

function verProductos(){
    console.log("Productos disponibles");
    console.log(tienda[0])
    console.log(tienda[1])
    console.log(tienda[2])
    console.log(tienda[3])
}
function promedioProd() {
    setTimeout(() => {
        var suma = 0;
        for (let i = 0; i < tienda.length; i++) {
            suma += tienda[i].precio;

        }
        prome = suma / tienda.length;
        console.log(`El promedio de los precios es: ${prome}`)
    }, 1000);
}

function ganacias(){
    setTimeout (() => {
    var multi = 0;
    for (let i = 0; i < tienda.length; i++) {
        multi = (tienda[i].precio * tienda[i].stock);

        console.log(`ganancias: ${multi}`)
    }
    }, 2000);
}

function ordenar(){
    setTimeout (() => {
        var aux = 0;
        for (let i = 0; i < tienda.length - 1; i++) {
           for (let j = i +1; j < tienda.length; j++) {
            if (tienda[i].stock < tienda[j].stock) {
            aux = tienda[j];
            tienda[j] = tienda[i];
            tienda[i] = aux;
           }
        }
    }
    console.log("El orden de los productos de mayor a menor es")
    console.log(tienda)
        }, 3000);
}

mostrarDatos(verProductos,promedioProd,ganacias,ordenar)
