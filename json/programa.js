const fs = require('fs');
 
let data=fs.readFileSync('./example.json')


let example = JSON.parse(data);


for(let i = 0; i < example.length; i++) {
    console.log(example[i],example[i].batters);  // (o el campo que necesites)
}


// // //otra forma

// let jsonData = require('./example.json');
// console.log(jsonData)
// console.log(typeof(jsonData))

// //grupo 3 

// //headers http