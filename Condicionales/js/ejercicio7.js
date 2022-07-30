//Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig. 
//manera:
//Si trabaja 40 horas o menos se le paga $2600 por hora
//Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
//horas y $5000 por cada hora extra

horast = prompt("¿Cuantas horas trabajaste?");
horasex = horast - 40;
excedente = horasex * 5000;
horast = parseInt(horast);

// calcula el pago por las horas del trabajador segun lo descrito

if (horast > 1 && horast <= 40) {
  alert("Trabajo por hora 2600");
  alert("Tu paga es de " + (horast * 2600));
} // pago por horas extra
else if (horast > 40) {
  alert("Tiene horas extra de trabajo, se te paga 5000 por cada hora extra");
  horast = (40 * 2600) + (excedente);
  alert("Tu paga es de " + (horast));
} else { //Para que no permita ni numeros negativos ni letras
  alert("Error numero invalido")
}

