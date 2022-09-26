import fetch from "node-fetch";

const URL = "https://covid-api.mmediagroup.fr/v1/cases?country=Colombia";

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    let vec = Object.values(data);
    let muertes = 0,
      totalF = 0,
      resultadoF = 0,
      confirmados = 0,
      total = 0,
      resultado = 0,
      fecha = "";
    for (let i = 1; i < vec.length; i++) {
      total += vec[i].confirmed;
      confirmados = total;
      resultado = confirmados / vec.length;
    }
    for (let i = 0; i < vec.length; i++) {
      fecha = vec[i].updated;
    }
    for (let i = 1; i < vec.length; i++) {
      totalF += vec[i].deaths;
      muertes = totalF;
      resultadoF = muertes / vec.length;
    }
    console.log(`A la fecha de hoy ${fecha} hay: `);
    console.log(`Total confirmados: ${confirmados}`);
    console.log(`Promedio de confirmados: ${resultado}`);
    console.log(`Total de fallecidos: ${muertes} `);
    console.log(`Promedio de fallecidos: ${resultadoF} `);

    let mayor = [];

    for (let i = 1; i < mayor.length ; i++) {
       mayor.push(vec[i].deaths)
    }
  console.log(`Numeros de muertes ordenados ${mayor}`);
    
  });
