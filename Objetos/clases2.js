class Aprendiz{
    constructor(nombre, documento, ficha, programa, competencia =['Analisis','desarrollo', 'codificar']){
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

let apren1=new Aprendiz('Juan',1234, 2453232, 'Programacion de Software', 90000000);
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

let apren2=new Aprendiz('David',123456, 1231233, 'Peluqueria', 'Prueba');
console.log(apren1);
console.log(typeof(apren1));
console.log(apren2);
console.log(typeof(apren2));

const aprendiz1 = {
    nombre: "Maria",
    documento: 12345,
    competencias: ["diseño", "análisis", "desarrollo"],
    formacion:{ programa: "Prg de software", ficha:2453232, },
    datosPersonales:function(){
      return `nombre...${this.nombre}, documento...${this.documento}`;
    }
  }
  
  const aprendiz2 = {
    nombre: "Pedro",
    documento: 54321,
    competencias: ["diseño", "análisis", "desarrollo","ética"],
    formacion:{ programa: "Prg de software", ficha:2453232, },
    datosPersonales:function(){
      return `nombre...${this.nombre}, documento...${this.documento}`;
    }
  }
  console.log(aprendiz2.datosPersonales());