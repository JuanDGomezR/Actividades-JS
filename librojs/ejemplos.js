// Classes and objects

//ej1
let dog1 = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
};

//ej2
class ClassName {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
}
let obj = new ClassName("arg1", "arg2");

//ej3
function Dog(dogName, weight, color, breed) {
  this.dogName = dogName;
  this.weight = weight;
  this.color = color;
  this.breed = breed;
}
let dog2 = new Dog("Jacky", 30, "brown", "labrador");
//class
class Dog {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}
let dog3 = new Dog("JavaScript", 2.4, "brown", "chihuahua");

console.log(dog3.dogName, "is a", dog3.breed, "and weighs", dog3.weight, "kg.");

//Constructors

//ej1

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let p = new Person("Maaike", "van Putten");
console.log("Hi", p.firstname);

// // sin todas las propiedades
// let p = new Person("Maaike");
// console.log("Hi", p.firstname, p.lastname);
// especificar valores predeterminados
// constructor(firstname, lastname = "Doe") {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }

//Metodos
//ej1
class Personj {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there! I'm", this.firstname);
  }
}

let pj = new Personj("Maaike", "van Putten");
pj.greet();

//ej2
class Personj1 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there!");
  }
  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
}
let pj1 = new Personj1("Maaike", "van Putten");
let compliment = pj1.compliment("Harry", "hat");
console.log(compliment);

//Propiedades
//ej1
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let p4 = new Person("Maaike", "van Putten");
console.log("Hi", p4.firstname);

//ej2
class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
}

//al usar # se invalida el uso de la priopiedad
let p5 = new Person("Maria", "Saga");
console.log(p5.firstname);

// si quieremos que la propiedad empiece con algo en especifico se cambia un poco el constructor
// constructor(firstname, lastname) {
//   if(firstname.startsWith("M")){
//   this.#firstname = firstname;
//   } else {
//   this.#firstname = "M" + firstname;
//   }
//   this.#lastname = lastname;
//   }
// let p = new Person("kay", "Moon");

//Getter y Setter

class PersonGt {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}
let pGt = new PersonGt("Maria", "Saga");
pGt.firstname = "Adnane";
console.log(pGt.firstname);

//si quieremos validar que el nombre empiece por M
// set firstname(firstname) {
//   if(firstname.startsWith("M")){
//   this.#firstname = firstname;
//   } else {
//   this.#firstname = "M" + firstname;
//   }
//   }

//Herencia

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
  this.color = color;
  this.currentSpeed = currentSpeed;
this.maxSpeed = maxSpeed;
}
move() {
console.log("moving at", this.currentSpeed);
}
accelerate(amount) {
this.currentSpeed += amount;
}
}
class Motorcycle extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
  super(color, currentSpeed, maxSpeed);
  this.fuel = fuel;
  }
  doWheelie() {
  console.log("Driving on one wheel!");
  }
  }

  let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

//Prototipos

//ej

class Person {
  constructor(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  }
  greet() {
  console.log("Hi there!");
  }
  }
  Person.prototype.introduce = function () {
    console.log("Hi, I'm", this.firstname);
    };
    Person.prototype.favoriteColor = "green";
    let pp = new Person("Maria", "Saga");
console.log(pp.favoriteColor);
pp.introduce();