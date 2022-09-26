class Poligono {
  constructor(lados, base, altura) {
    this._lados = lados;
    this._base = base;
    this._altura = altura;
  }

  set lados(lados) {
    this._lados = lados;
  }
  set base(base) {
    this._base = base;
  }
  set altura(altura) {
    this._altura = altura;
  }

  get lados() {
    return this._lados;
  }
  get base() {
    return this._base;
  }

  get altura() {
    return this._altura;
  }

  areaT(b, a) {
    b = this.base;
    a = this.altura;
    var areaTr = (b * a) / 2;
    return areaTr;
  }
  perimetroT(l) {
    l = this.lados
    var perT = (l + l + l);
    return perT;
}

  areaC(b, a) {
    b = this.base;
    a = this.altura;
    var areaCu = b * a;
    return areaCu;
  }

  perimetroCu(b, l) {
    b = this.base;
    l = this.lados;
    var periCu = b * l;
    return periCu;
  }

  areaRec(b, a) {
    b = this.base;
    a = this.altura;
    var areaCu = b * a;
    return areaCu;
  }

  perimetroRec(b, a) {
    b = this.base;
    a = this.altura;
    var periRec = 2 * b + 2 * a;
    return periRec;
  }
}

//triangulo
const fig = new Poligono();
console.log(typeof fig);

class Triangulo extends Poligono {
  constructor(lados, base, altura, nombre) {
    super(lados, base, altura);
    this._nombre = nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }
}

const tri = new Triangulo(3, 3, 3, "triangulo");
console.log(`nombre ${tri.nombre}`);
console.log(`Lados ${tri.lados}`);
console.log(`base ${tri.base}`);
console.log(`altura ${tri.altura}`);
console.log(`area ${tri.areaT()}`);
console.log(`perimetro ${tri.perimetroT()}`);

//cuadrado

const fig2 = new Poligono();
console.log(typeof fig2);

class Cuadrado extends Poligono {
  constructor(lados, base, altura, nombre) {
    super(lados, base, altura);
    this._nombre = nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }
}

const cua = new Cuadrado(4, 4, 3, "cuadrado");
console.log(`nombre ${cua.nombre}`);
console.log(`Lados ${cua.lados}`);
console.log(`base ${cua.base}`);
console.log(`altura ${cua.altura}`);
console.log(`area ${cua.areaC()}`);
console.log(`perimetro ${cua.perimetroCu()}`);

//Rectangulo
const fig3 = new Poligono();
console.log(typeof fig3);

class Rectangulo extends Poligono {
  constructor(lados, base, altura, nombre) {
    super(lados, base, altura);
    this._nombre = nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get nombre() {
    return this._nombre;
  }
}

const rec = new Rectangulo(4, 5, 3, "Rectangulo");
console.log(`nombre ${rec.nombre}`);
console.log(`Lados ${rec.lados}`);
console.log(`base ${rec.base}`);
console.log(`altura ${rec.altura}`);
console.log(`area ${rec.areaRec()}`);
console.log(`perimetro ${rec.perimetroRec()}`);
