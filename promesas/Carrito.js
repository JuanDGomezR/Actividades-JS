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

const prod1 = new Producto("Televisor OLED 120hz 4K", 2, 2);
const prod2 = new Producto("Televisor LCD 144hz 1080p", 2, 1);
const prod3 = new Producto("Televisor MICROLED 59 pulgadas", 2, 1);
const prod4 = new Producto("Televisor SUPERAMOLED 50 pulgadas", 2, 4);

let carrito = [];
carrito.push(prod1, prod2, prod3, prod4);

function totalProducto(suma) {
  setTimeout(() => {
    var suma = 0;

    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].cantidad > 0) {
        suma += carrito[i].cantidad;
      }
      console.log(`Cantidad total de productos ${suma} `);
    }
    to = suma * carrito[i].precio
    return to
  }, 2000);
}

// colocar los productos en una promesa

const traerProducto = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(carrito);
    }, 1500);
  });
};

traerProducto().then((carrito) => console.log(carrito));

const total = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(totalProducto());
    }, 3000);
  });
};

total().then((suma) => {
  console.log(`productos totales ${suma}`);
  return suma;
});
total().then((to) => {
  console.log(`productos totales ${to}`)
  return to;
})

const subtotal = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let presupuesto = 600000;
      let sub = carrito.precio - presupuesto;
      for (let i = 0; i < carrito.length; i++) {
        if (sub > presupuesto) {
            resolve(carrito.precio);
          } else {
            console.log(`falta ${sub} de dinero`);
          }
      }
    }, 6000);
  });
};

subtotal().then((carrito) => console.log(sub));
async function mostrarSubtotal(num) {
  console.log(`numero A: ${sub} `)
  const numeros = await subtotal(num);
  console.log(numeros)
}

mostrarComparador(x)
