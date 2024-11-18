"use strict"

const tabMot = ["DEVELOPPEUR", "INTEGRATEUR", "CLIENT", "SERVEURS", "JAVASCRIPT", "REACTJS", "SYMFONY", "MYSQL", "BOOTSTRAP", "NAVIGATEUR", "INTERNET", "FRAMEWORK", "TAILWIND", "MOZILLA", "CHROME", "FREELANCE", "CONCEPTEUR", "APPLICATION", "MERISE", "HTML", "STYLE", "TERMINAL"];

// génère un mot aleatoire a partir du tableau
const motAlea = tabMot[Math.floor(Math.random() * tabMot.length)];
console.log(motAlea);

const fieldText = document.getElementById("alphabet")
const showLetter = document.getElementById("try_show");
const tries = document.getElementById("try_list");
let letterToCompare;

// récupère la lettre cliquer
function pickLetter(event) {
    if (event.target.tagName === "P") {
        letterToCompare = event.target.textContent;
    }
}

// affiche l'emplacement du mot a trouvé en cachant le mot
function displayLocation() {
    for (let i = 0; i < motAlea.length; i++) {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = motAlea[i]
        letterSpan.classList.add("letter-span");
        showLetter.appendChild(letterSpan)
    }
}
displayLocation();

// compare la lettre cliquer au mot a trouver et l'affiche
function compare() {
    for (let i = 0; i < motAlea.length; i++) {
        if (motAlea[i] == letterToCompare) {
            console.log(motAlea[i]);
            const letterSpan = showLetter.getElementsByTagName("span")[i]
            letterSpan.classList.add("letter-ok");
        }
    }
}

fieldText.addEventListener("click", pickLetter)
fieldText.addEventListener("click", compare)


/** comparer si present dans le mot choisi ou pas
 * inclu : affiché la lettre aux bons index
 * non inclus : ne rien faire
 * disabled les lettre deja choisi
 * compteur +1 a chaque click, affiché nombre d'essai, compteur max = 20
 * nb erreur 10 max
 * si mot complet fin du jeu gagné sinon perdu
 */