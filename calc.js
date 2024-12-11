// Fonction pour ajouter un chiffre ou un opérateur dans le champ calcul
function ajouterNombre(nombre) {
    const champCalcul = document.getElementById("calcul");
    champCalcul.value += nombre; 
}

function ajouterOperateur(operateur) {
    const champCalcul = document.getElementById("calcul");
    const derniereValeur = champCalcul.value.slice(-1);


    if (!["+", "-", "*", "/"].includes(derniereValeur)) {
        champCalcul.value += operateur;
    }
}


function calculerSomme() {
    const champCalcul = document.getElementById("calcul");
    const champResultat = document.getElementById("resultat");

    try {
        const resultat = eval(champCalcul.value);
        champResultat.value = resultat; 
        champCalcul.value = resultat;
    } catch (e) {
        champResultat.value = "Erreur!";
    }
}

function ajouterParenthese() {
    const calcul = document.getElementById('calcul');
    const valeur = calcul.value;

    // Compter le nombre de parenthèses ouvrantes et fermantes
    const ouvrantes = (valeur.match(/\(/g) || []).length;
    const fermantes = (valeur.match(/\)/g) || []).length;

    // Décider quelle parenthèse ajouter
    if (ouvrantes > fermantes) {
        calcul.value += ')'; // Ajouter une parenthèse fermante
    } else {
        calcul.value += '('; // Ajouter une parenthèse ouvrante
    }
}

function changerSigne() {
    let affichage = document.getElementById('calcul');
    let valeur = affichage.value;
    if (valeur) {
        if (valeur.charAt(0) === '-') {
            affichage.value = valeur.slice(1); // Retire le signe négatif
        } else {
            affichage.value = '-' + valeur; // Ajoute le signe négatif
        }
    }
}

function ajouterPoint() {
    let affichage = document.getElementById('calcul');
    let valeur = affichage.value;
    if (valeur.indexOf('.') === -1) {
        affichage.value = valeur + '.'; // Ajoute un point si aucun point n'est présent
    }
}


function effacerDerniereEntree() {
    let calcul = document.getElementById('calcul').value;
    document.getElementById('calcul').value = calcul.slice(0, -1); // Supprime le dernier caractère
}


function reinitialiser() {
    document.getElementById("calcul").value = ""; 
    document.getElementById("resultat").value = ""; 
}
