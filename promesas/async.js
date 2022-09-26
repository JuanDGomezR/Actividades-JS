const counter = new Promise((resolve) => {
    let x = 1
    resolve(x); 
   
})
    .then(value => {
   
        console.log(value)
   
          return ++value;
    })
 
    .then(value => {
      
            console.log(value)
       
              return ++value;
    })
    .then(value => {
        
            console.log(value)
          
              return ++value;
    })
    .then(value => {
       
            console.log(value)
           
              return ++value;
    })

    .then(value => {
        console.log(value)
    });

// const counter2 = new Promise((resolve) => {
//     let x = "TIENE PAN?"
//     resolve(x); 
   

// })
//     .then(value => {
//         let y = setInterval(() => console.log(value), 10);
//         setTimeout(() => {
//             clearInterval(y);
//           }, 10000);
//           return value;
//     })
 
    
//     .then(value => {
//         console.log(value)
//     });

function miPromesa(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hola ${nombre}`)
            resolve(nombre);
        }, 1000);
    })
}
miPromesa('Soacha')
.then((value) => {
    console.log(`Saludo a ${value}`)
    return value;
})

.then(externa)
function externa(parametro) {
    setTimeout(() => {
        console.log(`Dato recibido del then: ${parametro}`)
        console.log(`Soy una funcion externa`)
        console.log(`Con retardo de 2 segundos`)
    }, 2000);
}