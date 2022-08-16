//Practice exercise 7.1
//Realice los siguientes pasos para crear una clase de persona e imprimir instancias de nombres de amigos:
// 1. Cree una clase para Persona que incluya el constructor para nombre y apellido.
// 2. Cree una variable y asigne un valor al nuevo objeto Persona usando el nombre y apellido de un amigo.
// 3. Ahora agregue una segunda variable con el nombre de otro amigo usando su primer nombre y apellido.
//4. Envíe a ambos amigos a la consola con un saludo de hola.
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let amigo1 = new Persona("Miguel", "Lozano");
console.log("hola", amigo1.nombre, amigo1.apellido);
let amigo2 = new Persona("Nicolas", "Ramirez");
console.log("y", amigo2.nombre, amigo2.apellido);

//Ejercicio de práctica  7.2
// Obtén el nombre completo  de tu amigo:
// 1. Usando la clase Persona del ejercicio de práctica 7.1, agregue un método llamado nombrecompleto, que devuelve el valor concatenado de nombre y apellido cuando se invoca.
// 2. Crea valores para persona1 y persona2 usando los nombres y apellidos de dos amigos.
// 3. Usando el método fullname dentro de la clase, devuelva el nombre completo de uno o
// ambas personas.

class Persona2 {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  nombreCompleto(nombre, apellido) {
    return "El es " + nombre + apellido;
  }
}
let p1 = new Persona2();
let nombreCompleto = p1.nombreCompleto("miguel ", "lozano");
console.log(nombreCompleto);
let p2 = new Persona2();
let nombreCompleto2 = p2.nombreCompleto("Nicolas ", "ramirez");
console.log(nombreCompleto2);

//   Ejercicio de práctica  7.3
// Crear una clase que contenga propiedades para diferentes especies animales  y el sonido que cada especie hace, y crea dos (o más) animales:
// 1. Crea un método que imprima un  animal determinado y su sonido.
// 2. Añade un prototipo con otra acción para el animal.
// 3. Envíe un objeto animal  completo a la consola.

class Animal {
  constructor(nombre, sonido) {
    this.nombre = nombre;
    this.sonido = sonido;
  }
  greet() {
    console.log("Hi there!");
  }
}
Animal.prototype.introduce = function () {
  console.log("El animal", this.nombre);
};
Animal.prototype.accion = "El animal duerme";
let ani = new Animal("Gato", "Miau");
console.log(ani.accion);
ani.introduce();

Animal.prototype.accion = "El animal Corre";
let anim = new Animal("Perro", "Guau");
console.log(anim.accion);
anim.introduce();
