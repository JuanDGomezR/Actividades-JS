class Producto {
  constructor(nombre, precio, cantidad) {
    this._nombre = nombre;
    this._precio = precio;
    this._cantidad = cantidad;
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }
  get cantidad() {
    return this._cantidad;
  }
  set cantidad(cantidad) {
    return (this._cantidad = cantidad);
  }
}

const prod1 = new Producto("Televisor OLED 120hz 4K", 2, 1);
const prod2 = new Producto("Televisor LCD 144hz 1080p", 2, 1);
const prod3 = new Producto("Televisor MICROLED 59 pulgadas", 2, 1);
const prod4 = new Producto("Televisor SUPERAMOLED 50 pulgadas",2, 1);

let carrito = [];
carrito.push(prod1, prod2, prod3, prod4);

function totalProducto(suma) {
  setTimeout(() => {
    suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].cantidad > 0) {
        suma += carrito[i].cantidad;
      }
      console.log(`Cantidad total de productos ${suma} `);
    }
  }, 2000);
}

async function totalCantidadP() {
  console.log(`Cantidad de productos: ${totalProducto.suma}`)
  const numeros = await totalProducto(totalProducto.suma);
  console.log(numeros)
}

setTimeout(() => {
  totalCantidadP()
}, 3000);



// colocar los productos en una promesa

const traerProducto = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(carrito);
    }, 1500);
  });
};

traerProducto().then((carrito) => console.log(carrito));

let multi = 0
let conta = 0
let resultado = 0
let presu = 60000
function presupuesto(num) {
  return new Promise(resolve => {
      setTimeout(() => {
          conta++;
        if (conta > presupuesto) {
          resolve(` tiene un total de: ${carrito[i].precio}`);
        } else{
          console.log('le falta dinero')
        }
      }, 5000);
  });
}

async function subTotal(num) {
  console.log(`Subtotal: ${resultado}`)
  const numeros = await presupuesto(num);
  console.log(numeros)
}

for (let i = 0; i < carrito.length; i++) {
  multi = (carrito[i].precio * carrito[i].cantidad);
  conta += carrito[i].precio;
  resultado = multi + conta
}

setTimeout(() => {
  subTotal()
}, 6000);

