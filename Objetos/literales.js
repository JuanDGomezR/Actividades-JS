//Tarea de fracciones

var frac = {
    numerador: Math.round(Math.random() * 100),
    numeradorb: Math.round(Math.random() * 100),
    denominador: Math.round(Math.random() * 100),
    denominadorb: Math.round(Math.random() * 100),
}

for (let i = 0; i< 1; i++){

    operaA = frac.numerador * frac.denominadorb
    operaB = frac.denominador * frac.numeradorb
    sumarel =  operaA + operaB
    denominadorR = frac.denominador * frac. denominadorb
}
console.log(`La fraccion A: ${frac.numerador} / ${frac.denominador}`)
console.log(`La fraccion b: ${frac.numeradorb} / ${frac.denominadorb}`)

console.log(`la suma de la fraccion es: ${sumarel} / ${denominadorR}`);



