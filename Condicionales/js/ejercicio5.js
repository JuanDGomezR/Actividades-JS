/// //Ejercicio 5: En un juego de preguntas a las que se responde “Si” o “No” gana quien responda correctamente las tres preguntas. Si se responde mal a cualquiera de
// ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
// 1. Colon descubrió América?
// 2. La independencia de Colombia fue en el año 1810?
// 3. The Doors fue un grupo de rock Americano?

// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...

var info = alert("A continuacion se el harán preguntas de 'SI' o 'NO', click en aceptar para ver indicaciones");

var indicaciones = alert(
  "Indicaciones: escribir '1' para SI y '2' para NO, ¡SUERTE!"
);

let preguntaA = prompt("La primera pregunta es: Colon descubrió América?");
if (isNaN(preguntaA) || preguntaA <= 0 || preguntaA >= 2) {
  alert("Incorrecto, vuelva a cargar la pagina e intentelo de nuevo");
} else if ((preguntaA = 1)) {
  let preguntaB = prompt(
    "La segunda pregunta es: La independencia de Colombia fue en el año 1810?"
  );
  if (isNaN(preguntaB) || preguntaB <= 0 || preguntaB >= 2) {
    alert("Incorrecto, vuelva a cargar la pagina e intentelo de nuevo");
  } else if ((preguntaB = 1)) {
    let preguntaC = prompt(
      "La tercera pregunta es: The Doors fue un grupo de rock Americano?"
    );
    if (isNaN(preguntaC) || preguntaC <= 0 || preguntaC >= 2) {
      alert("Incorrecto, vuelva a cargar la pagina e intentelo de nuevo");
    } else if ((preguntaC = 1)) {
      alert(`FELICIDADES!! Has acertado todas las preguntas`);
    }
  }
}
