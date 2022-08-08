// Punto 4: FUncion y funcion flecha
//Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores
//Notas //0 y 20 // 20 y 40 // 40 y 60 // 60 y 80 // 80 y 100

//Funcion clasica
function notas(n) {
  let nota = Math.round(Math.random() * 100);
  if (nota >= 0 && nota < 20) {
    for (let i = 0; i < 100; i++) {}
  } else if (nota >= 20 && nota < 40) {
    console.log(`Tu nota es insuficiente`);
  } else if (nota >= 40 && nota < 60) {
    console.log(` Tu nota esbaja`);
  } else if (nota >= 60 && nota < 80) {
    console.log(`Tu nota es media`);
  } else if (nota >= 80 && nota < 99) {
    console.log(`Tu nota es buena`);
  } else {
    console.log(`Tu nota es alta`);
  }
  return nota;
}
console.log(`Tu Calificacion fue de ${notas()}`);

//funcion flecha
const notaN = (n) => {
  let nota = Math.round(Math.random() * 100);
  if (nota >= 0 && nota < 20) {
    for (let i = 0; i < 100; i++) {}
  } else if (nota >= 20 && nota < 40) {
    console.log(`Tu nota es insuficiente`);
  } else if (nota >= 40 && nota < 60) {
    console.log(` Tu nota esbaja`);
  } else if (nota >= 60 && nota < 80) {
    console.log(`Tu nota es media`);
  } else if (nota >= 80 && nota < 99) {
    console.log(`Tu nota es buena`);
  } else {
    console.log(`Tu nota es alta`);
  }
  return nota;
};
console.log(notaN());

//Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
//manera:
//Si trabaja 40 horas o menos se le paga $2600 por hora
//Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
//horas y $5000 por cada hora extra

//Funcion clasica
function horasTrabajo() {
  let horast = Math.round(Math.random() * 100);
  horasex = horast - 40;
  excedente = horasex * 5000;

  if (horast > 1 && horast <= 40) {
    console.log("Tu pago es " + horast * 2600);
  } else {
    console.log(`horas: ${horast}, `);
    console.log(`horas extras: ${horasex}`);
    horast = 40 * 2600 + excedente;
  }
  return horast;
}
console.log(`horas trabajadas: ${horasTrabajo()}`);

//funcion flecha
const trabajo = () => {
  let horast = Math.round(Math.random() * 100);
  horasex = horast - 40;
  excedente = horasex * 5000;

  if (horast > 1 && horast <= 40) {
    console.log("Tu pago es " + horast * 2600);
  } else {
    console.log(`horas: ${horast}, `);
    console.log(`horas extras: ${horasex}`);
    horast = 40 * 2600 + excedente;
  }
  return horast;
};
console.log(`horas trabajadas: ${trabajo()}`);

///////////////////

function preguntas() {
let p
for (let i = 0; p < 2; i++) {
  Math.round(Math.random() * 100);
}
  
  p = "La primera pregunta es: Colon descubrió América?";
  
  if ((p != 1)) {
    console.log("Acertaste");
  } else {
    console.log("Fallaste");
  }

  // let pregunta1 = console.log(
  //   "La segunda pregunta es: La independencia de Colombia fue en el año 1810?"
  // );
  // if (pregunta2 = 1) {
  //   console.log("Acertaste");
  // } else {
  //   console.log("Fallaste");
  // }
  // let pregunta3 = console.log(
  //   "La tercera pregunta es: The Doors fue un grupo de rock Americano?"
  // );
  // if (pregunta3 = 1) {
  //   console.log("acertaste");
  // } else {
  //   console.log(`fallaste`);
  // }
  return p
}
console.log(preguntas())


//Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número exceda los límites emita un mensaje y finalice el programa

// funcion clasica
function cifra(nu) {
let numero = (Math.random() * 100)
let contador = 0;
if (numero <= 9.999) {
    console.log(`El numero ${numero} esta entro 0 y 9.999`)
} else {
    console.log(`El numero ${numero} ha excedido el limite`)
    contador = numero
}
return contador
}
console.log(`tiene ${cifra()%2} numeros de cifras despues del punto`)

// funcion flecha

const cifra2 = () => {
  let numero = (Math.random() * 100)
let contador = 0;
if (numero <= 9.999) {
    console.log(`El numero ${numero} esta entro 0 y 9.999`)
} else {
    console.log(`El numero ${numero} ha excedido el limite`)
    contador = numero
}
return contador
}
console.log(`tiene ${cifra2()%2} numeros de cifras despues del punto`)
  