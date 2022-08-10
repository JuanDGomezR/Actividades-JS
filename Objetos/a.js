class Poligono{
    constructor(lados,base,altura){
        this.lados = lados;
        this.base = base;
        this.altura = altura;
    }

    area(a,b){
        this._base=b;
        this._altura=a;
        var area = Math.pow(a*b,2);          
        return area
    }

    dibuja(){

    }
};

let obj1 = new Poligono(2,3,2);
console.log(`La base es:${obj1.base}, La altura es: ${obj1.altura}`);
console.log(`La base por la altura al cuadrado es: ${obj1.area(3,2)}`);

class Cuadrado extends Poligono{

    constructor(){
        super(this._lados,this.base,this.altura);   
    }

};