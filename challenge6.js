var prompt = require('prompt-sync')();
let partie1 = Number(prompt("score partie1 :"));
let partie2 = Number(prompt("score partie2 :"));
let partie3= Number(prompt("score partie3 :"));
let partie4= Number(prompt("score partie4 :"));
let total = partie1 + partie2 + partie3 + partie4 ;
let moyenne = total / 4;
console.log("total :" + total );
console.log("moyenne : " + moyenne);