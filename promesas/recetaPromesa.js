
function receta(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hola ${nombre}`)
            resolve(nombre);
        }, 1000);
    })
}
receta('Pan')
.then((value) => {
    console.log(`tiene ${value}`)
    return value;
})

.then(ingrediente)
function ingrediente(ingredientes) {
    setTimeout(() => {
        console.log(`uevo ${ingredientes}`)
        console.log(`arina`)
        console.log(`asucar`)
    }, 2000);
}