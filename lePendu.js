"use strict"

const tabMot = ["DEVELOPPEUR", "INTEGRATEUR", "CLIENT", "SERVEURS", "JAVASCRIPT", "REACTJS", "SYMFONY", "MYSQL", "BOOTSTRAP", "NAVIGATEUR", "INTERNET", "FRAMEWORK", "TAILWIND", "MOZILLA", "CHROME", "FREELANCE", "CONCEPTEUR", "APPLICATION", "MERISE", "HTML", "STYLE", "TERMINAL"];

// génère un mot aleatoire a partir du tableau
const motAlea = tabMot[Math.floor(Math.random() * tabMot.length)];
console.log(motAlea);

const fieldText = document.getElementById("alphabet")
const showLetter = document.getElementById("try_show");
const tries = document.getElementsByClassName("start")[0];
const spanCount = document.createElement("span");
const displayResult = document.getElementById("alert");

tries.appendChild(spanCount)

let letterToCompare;
let count = 0;
let countWin = 0;
// let countLose = 0;

// affiche l'emplacement du mot a trouvé en cachant le mot
function displayLocation() {
    for (let i = 0; i < motAlea.length; i++) {
        const letterSpan = document.createElement("span");
        showLetter.appendChild(letterSpan)
        letterSpan.textContent = motAlea[i]
        letterSpan.classList.add("letter-span");
    }
}
displayLocation();

// récupère la lettre cliquer
function pickLetter(event) {
    if (event.target.tagName === "P") {
        if (event.target.className === "lettre" && event.target.className !== "letter-disabled") {
            letterToCompare = event.target.textContent;
            event.target.classList.add("letter-disabled");
            compare();
            displayTries(event);
        }
    }
}

// compare la lettre cliquer au mot a trouver et l'affiche
function compare() {
    for (let i = 0; i < motAlea.length; i++) {
        if (motAlea[i] === letterToCompare) {
            const letterSpan = showLetter.getElementsByTagName("span")[i];
            letterSpan.classList.add("letter-ok");
            countWin++;
            console.log(countWin, "countWin");
            if (countWin === motAlea.length) {
                console.log("gagné");
                const winner = document.createElement("h1");
                winner.textContent = "Vous avez gagné!!!🎉"
                displayResult.appendChild(winner);
            }
        }
    }
}

// affiché nb d'essai
function displayTries(event) {
    count++;
    spanCount.textContent = `${count}`;    
}

fieldText.addEventListener("click", pickLetter);

/** 
 * compteur + 1 a chaque erreur --> nb erreur 9 max => Lose!
 */