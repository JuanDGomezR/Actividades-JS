//Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores

let nota = prompt(
  "Escribe la nota final de tu materia, recuerde poner un valor de 0 a 100"
);

//Notas
//0 y 20
// 20 y 40
// 40 y 60
// 60 y 80
// 80 y 100
nota = parseInt(nota);

if (nota >= 0 && nota < 20) {
  alert(`Tu nota es: ${nota} Es una nota insuficiente, tienes que mejorar`);
} else if (nota >= 20 && nota < 40) {
  alert(`Tu nota es: ${nota} Es una nota baja, esta al borde mejora`);
} else if (nota >= 40 && nota < 60) {
  alert(
    `Tu nota es: ${nota} Es una nota media, es aceptable, pero puedes dar mas`
  );
} else if (nota >= 60 && nota < 80) {
  alert(`Tu nota es: ${nota} Es una nota buena, FELICIDADES`);
} else if (nota >= 80 && nota < 99) {
  alert(`Tu nota es: ${nota} Es una nota alta, FELICIDADES`);
} else if (nota == 100) {
  alert(`Tu nota es: ${nota} Es una nota excelente, FELICIDADES`);
} else {
  alert("Valor invalido");
}

