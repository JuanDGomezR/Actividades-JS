//callbacks

function pruebaCallback(callback1,callback2, name){
    callback1(name)
    
    setTimeout(() => {
        console.log('Dentro de pruebaCallback')
    }, 2000);
    callback2(name)
}

function saludo(nombre) {
    console.log(`Hola ${nombre}`)
}
function cuentaLetras(nombre){
    console.log(nombre.length)
}
pruebaCallback(cuentaLetras,saludo, 'ana')
//pruebaCallback(cuentaLetras,'Soacha Cundinamarca')

