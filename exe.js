const fruits = ['banane', 'ananes', 'ananas', 'mangue'];

function triAlphabetique(tableau) {
  let n = tableau.length;
  
  
  for (let i = 0; i < n; i++) {
      for (let j = 0; j <n ; j++) {
          // Comparaison en minuscules pour ne pas fausser le tri avec les majuscules
          if (tableau[j] > tableau[j + 1]) {
              // Échange des éléments (Destructuring assignment)
              [tableau[j], tableau[j + 1]] = [tableau[j + 1], tableau[j]];
            }
        }
    }
    return tableau;
}
console.log(triAlphabetique(fruits));
