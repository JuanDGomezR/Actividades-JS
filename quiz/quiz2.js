//Vendedora de autos
class Sistema {
    constructor(nSerieMotor, marca, año, precio) {
        this.nSerieMotor = nSerieMotor;
        this.marca = marca;
        this.año = año;
        this.precio = precio;
    }
    set nSerieMotor(nSerieMotor) {
        this._nSerieMotor = nSerieMotor;
    }
    set marca(marca) {
        this._marca = marca;
    }
    set año(año) {
        this._año = año;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get nSerieMotor() {
        return this._nSerieMotor;
    }
    get marca() {
        return this._marca;
    }
    get año() {
        return this._año;
    }
    get precio() {
        return this._precio;
    }
}

//autocompacto

class AutoCompacto extends Sistema {
    constructor(nSerieMotor, marca, año, precio, cantidadPasajeros) {
        super(nSerieMotor, marca, año, precio);
        this.cantidadPasajeros = cantidadPasajeros;
    }
    set cantidadPasajeros(cantidadPasajeros) {
        this._cantidadPasajeros = cantidadPasajeros
    }
    get cantidadPasajeros() {
        return this._cantidadPasajeros

    }
}

/// espacio para llamar

let compacto = new AutoCompacto("45MHCV545454", "HUNDAI", 2015, 4500000, 5)
console.log(compacto)
//auto de lujo
class AutoLujo extends Sistema {
    constructor(nSerieMotor, marca, año, precio, cantidadPasajeros) {
        super(nSerieMotor, marca, año, precio);
        this.cantidadPasajeros = cantidadPasajeros;
    }
    set cantidadPasajeros(cantidadPasajeros) {
        this._cantidadPasajeros = cantidadPasajeros
    }
    get cantidadPasajeros() {
        return this._cantidadPasajeros

    }
}

/// espacio para llamar
let lujo = new AutoLujo("45DV548469", "FERRARI", 2022, 10000000, 2)
console.log(lujo)

//auto de Camioneta
class AutoCamioneta extends Sistema {
    constructor(nSerieMotor, marca, año, precio, peso) {
        super(nSerieMotor, marca, año, precio);
        this.peso = peso;
    }
    set peso(peso) {
        this._peso = peso
    }
    get peso() {
        return this._peso

    }
}

/// espacio para llamar
let camio = new AutoCamioneta("45MHG565456", "FORD", 2023, 45000000, 6, 1000)
console.log(camio)

//auto de vagoneta
class AutoVagoneta extends Sistema {
    constructor(nSerieMotor, marca, año, precio, cantidadPasajeros) {
        super(nSerieMotor, marca, año, precio);
        this.cantidadPasajeros = cantidadPasajeros;
    }
    set cantidadPasajeros(cantidadPasajeros) {
        this._cantidadPasajeros = cantidadPasajeros
    }
    get cantidadPasajeros() {
        return this._cantidadPasajeros

    }
}

/// espacio para llamar
let vago = new AutoVagoneta("45MHG9841", "FORD", 2022, 4505000, 8, 100)
console.log(vago)