class Publicacion {
    constructor(titulo, precio) {
        this._titulo = titulo;
        this._precio = precio;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    set precio(precio) {
        this._precio = precio;
    }
    get titulo() {
        return this._titulo;
    }
    get precio() {
        return this._precio;
    }
}

//libro

class Libro extends Publicacion {
    constructor(titulo, precio, nPaginas) {
        super(titulo, precio);
        this._nPaginas = nPaginas;
    }

    set nPaginas(nPaginas) {
        this._nPaginas = nPaginas;
    }
    get nPaginas() {
        return this._nPaginas
    }
}

const libro = new Libro("Las increibles aventuras del viejo", 74000, 15);
console.log(libro)
libro.titulo = "Te amo y mas"
console.log(`Titulo: ${libro.titulo}`)
libro.precio = 78900
console.log(`Precio: ${libro.precio}`)
libro.nPaginas = 120
console.log(`Paginas: ${libro.nPaginas}`)

//CD

class DiscoCompacto extends Publicacion {
    constructor(titulo, precio, tiempoReproduccion) {
        super(titulo, precio);
        this._tiempoReproduccion = tiempoReproduccion;
    }

    set tiempoReproduccion(tiempoReproduccion) {
        this._tiempoReproduccion = tiempoReproduccion;
    }
    get tiempoReproduccion() {
        return this._tiempoReproduccion
    }
}
console.log(`---------------------`)

const disco = new DiscoCompacto("El rosa una aventura flipante", 20000, 1.30);
console.log(disco)
libro.titulo = "Ataque de zombies"
console.log(`Titulo: ${libro.titulo}`)
libro.precio = 35600
console.log(`Precio: ${libro.precio}`)
libro.tiempoReproduccion = 1.20
console.log(`Tiempo de reproduccion: ${libro.tiempoReproduccion}hr`)