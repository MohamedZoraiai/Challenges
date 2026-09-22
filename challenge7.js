var prompt = require('prompt-sync')();
console.log("1 : Afficher le profil \n",
    "2 : Afficher les paramètres \n" ,
    "3 : Afficher les notifications \n ",
    "4 : Se déconnecter \n",
    "5 : exit \n",)
    let Choix = Number(prompt("choix :"));
     switch (Choix) {
            case 1:
                console.log("Afficher le profil")
                break;
            case 2:
            console.log("Afficher les paramètres")
                break;
            case 3:
                console.log("Afficher les notifications")
                break;
            case 4:
                console.log("Se déconnecter")
            default:
                "choix invalide"
                console.log("choix invalide")
        }