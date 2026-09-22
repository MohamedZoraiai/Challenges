var prompt = require('prompt-sync')();
let name = prompt("name :")
let title = prompt("title :")
function salutClient(name , title){
    return`bonjour ${title} ${name}.`
}
console.log(salutClient(name,title || "client"))