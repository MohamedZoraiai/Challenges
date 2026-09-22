let result = 0
function compterVoyelles(chaine){
    for(let i = 0 ; i<=chaine.length; i++){
        if(chaine[i]=== "a" ||  chaine[i]=== "i" || chaine[i]=== "e"|| chaine[i]==="u")

        result++
        
    } 
    return result
}
console.log(compterVoyelles("iieff"));
