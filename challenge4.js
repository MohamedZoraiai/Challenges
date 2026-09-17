var prompt = require('prompt-sync')();
let carburant = Number(prompt("La quantité de carburant consommée en litres :"));
let distance = Number(prompt("La distance parcourue en kilomètres :"));
let consommation =Math.trunc((carburant/ distance)*100);
console.log("consommtion : "+ consommation +"l/" + 100+ "km");