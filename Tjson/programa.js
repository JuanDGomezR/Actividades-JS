const fs = require('fs');

let data=fs.readFileSync('./example.json')


let example = JSON.parse(data)[i];
console.log(example);
console.log(typeof(example))

//otra forma

let jsonData = require('./example.json');
console.log(jsonData)
console.log(typeof(jsonData))