// ejemplos promesas
console.log("promesa")

let promise = new Promise(function (resolve, reject) {

    let x = 11;
    if (x > 10) {
        resolve(x);
    } else {
        reject("Too low");
    }
});
promise.then(
    function (f) {
        setTimeout(() => {
            console.log("Success:", f);
        }, 5000);
        
    },
    function (error) {
        setTimeout(() => {
        console.log("Error:", error);
        }, 5000);
    }
);
//ejemplos async
let conta = 0

function contador(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            conta++;
            resolve(`x Valor ${num} contador:${conta}`);
        }, 2000);
    });
}

async function imprimir(num) {
    console.log(`contador ${num} listo:${conta}`)
    const numeros = await contador(num);
    console.log(numeros)
}

for (let x = 1; x < 8; x++) {
    imprimir(x);
}


// let x = Math.round(Math.random() * (20 - 2) + 2)
// let y = Math.round(Math.random() * (20 -2)+2)
let x = 2
let y = 2

function comparacion(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x != y) {
                resolve(`los numeros son diferentes`);
            } else {
                reject(`los numeros son iguales ${num}`)
            }
        }, 2000);
    });
}
async function mostrarComparador(num) {
    console.log(`numero A: ${x} y numero B: ${y}`)
    const numeros = await comparacion(num);
    console.log(numeros)
}

mostrarComparador(x)


setTimeout(() => {
    
}, timeout);