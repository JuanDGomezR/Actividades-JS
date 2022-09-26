console.log('Hola');
setTimeout(() => {
   console.log('Interrupcion por timeout'); 
}, 2000);
setTimeout(function() {
    console.log('settimeout con funcion clasica');
},1000);
function externa(){
    console.log('soy externa al timeout')
}
setTimeout(externa,500)
function salu2(){
    console.log('hola mundoXD')
}
setTimeout(saludos);
console.log('Debo ejecutarme antes del time out')
function saludos(nombre,rol){
    console.log(`Hola,  mi nombre es ${nombre}`);
    console.log(`Yo soy ${rol}`);

}
saludos('Juan','plomero');
setTimeout(saludos,3000,"Nathan","Programador");

