function rechercheLineaire(nombre){
    let x=false
    for(let i=0;i<nombre.length;i++){
        if(nombre[i]===Number)
            x=true
        break ;
    }         return x
}
let Number=[4, 8, 15, 16, 23, 42];
console.log(rechercheLineaire(Number,4))
