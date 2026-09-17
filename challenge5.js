var prompt = require('prompt-sync')();
let Duree = Number(prompt("Duree:"))
let categorie="";
if (Duree < 60 ){
   categorie="the film is courtmetrage"
}else if  (Duree <= 120 ) {
   categorie="the film is standard"
} else{
   categorie="the film is long"
}
console.log("Duree :"+ Duree + "minutes")
console.log("categorie:" + categorie);