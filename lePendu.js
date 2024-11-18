"use strict"

const tabMot = ["DEVELOPPEUR", "INTEGRATEUR", "CLIENT", "SERVEURS", "JAVASCRIPT", "REACTJS", "SYMFONY", "MYSQL", "BOOTSTRAP", "NAVIGATEUR", "INTERNET", "FRAMEWORK", "TAILWIND", "MOZILLA", "CHROME", "FREELANCE", "CONCEPTEUR", "APPLICATION","MERISE","HTML","STYLE","TERMINAL"];

const motAlea = tabMot[Math.floor(Math.random()*tabMot.length)];
console.log(motAlea);

const fieldText = document.getElementById("alphabet") 
const showLetter = document.getElementById("try_show");
const tries = document.getElementById("try_list");
let letterToCompare;

function pickLetter(event) {
    if (event.target.tagName === "P") {
        letterToCompare = event.target.textContent;
    }
}

function compare() {
    const matches = motAlea.match(letterToCompare);
    console.log(matches);

}

function displayLocation() {
    for (let i = 0; i < motAlea.length -1; i++) {
        const letterSpan = document.createElement("span");
        letterSpan.textContent = motAlea[i]
        letterSpan.classList.add("letter-span");
        showLetter.appendChild(letterSpan)
    }
}
displayLocation();

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