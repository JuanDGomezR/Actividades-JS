class Producto{
    constructor(nombre, precio){
        this._nombre=nombre;
        this._precio=precio;
    }    
    get nombre(){
        return this._nombre;
    }    

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio=precio;
    }
}


//INSTANCIACION DE OBJETOS - operador new
//let x=10; similar a declarar variables
let prod1=new Producto('computador',4000000);
console.log(prod1.nombre, prod1.precio);
prod1.nombre="computador portatil";
prod1.precio= 3500000
console.log(prod1.nombre, prod1.precio);

// a = "------------------------------"
// console.log(a)

// let prod2=new Producto('Celular',3000000);
// console.log(prod1);
// console.log(typeof(prod1));
// console.log(prod2.nombre, prod2.precio);
// console.log(typeof(prod2));

//Tarea

class Aprendiz{
    constructor(nombre, documento, ficha, programa, competencia){
        this._nombre=nombre;
        this._documento=documento;
        this._ficha=ficha;
        this._programa=programa;
        this._competencia=competencia;

    }    
    get nombre(){
        return this._nombre;
    }    

    set nombre(nombre){
        this._nombre=nombre;
    }

    get documento(){
        return this._documento;
    }
    set documento(documento){
        this._documento=documento;
    }

    get ficha(){
        return this._ficha;
    }
    set ficha(ficha){
        this._ficha=ficha;
    }

    get programa(){
        return this._programa;
    }
    set programa(programa){
        this._programa=programa;
    }

    get competencia(){
        return this._competencia;
    }
    set competencia(competencia){
        this._documento=competencia;
    }
}
/*----------APRENDIZ 1----------*/
a1 = "---------------APRENDIZ1---------------"
console.log(a1)

let apren1=new Aprendiz('Juan',1234, 2453232, 'Programacion de Software', 'desarrollo' );
console.log(apren1);
//otro aprendiz prueba
// apren1.nombre="Sara";
// apren1.documento= 4321
// apren1.ficha= 1231233
// apren1.programa='Peluqueria'
// apren1.competencia='bases'
// console.log(apren1.nombre, apren1.documento, apren1.ficha, apren1.programa, apren1.competencia);

a2 = "---------------DATOS DE 2 APRENDICES---------------"
console.log(a2)

let apren2=new Aprendiz('David',123456, 1231233, 'Peluqueria', 'bases del peluquero');
console.log(apren1);
// console.log(typeof(apren1));
console.log(apren2);
// console.log(typeof(apren2));