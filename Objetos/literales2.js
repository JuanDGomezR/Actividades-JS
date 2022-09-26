//Objetos literales con arreglos
var coleccion = [
  {
    nombre: "Cien años de soledad ",
    autor: "Gabriell Garcia Marquez",
    obras: [{ nombre: "Crónica de una muerte anunciada" }]
  },
  {
    nombre: "Pedro Paramo",
    autor: "Juan Rulfo",
    obras: [{obra1: "El llano en llamas"}],
  },
  {
    nombre: "Siervo sin tierra",
    autor: "Eduardo Caballero Calderon",
    obras: [
      {
        obra1: "El cristo de espaldas"}],
  },
];



coleccion.forEach(function(c){
    console.log(c)
})
