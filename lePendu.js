"use strict"

// import { tabMot } from "./tab.js";
const tabMot = ["DEVELOPPEUR", "INTEGRATEUR", "CLIENT", "SERVEURS", "JAVASCRIPT", "REACTJS", "SYMFONY", "MYSQL", "BOOTSTRAP", "NAVIGATEUR", "INTERNET", "FRAMEWORK", "TAILWIND", "MOZILLA", "CHROME", "FREELANCE", "CONCEPTEUR", "APPLICATION", "MERISE", "HTML", "STYLE", "TERMINAL", "ANGULAR","GITHUB","GITLAB","DOCKER","INFORMATIQUE","SVELTE",];

// génère un mot aleatoire a partir du tableau
function newAlea(tab) {
    return tab[Math.floor(Math.random() * tab.length)];
}
let newMot = newAlea(tabMot);

// fetch("https://trouve-mot.fr/api/random")
//     .then((response) => response.json())
//     .then((words) => { 
//         newMot = words.name;
//         console.log(words);
//         displayLocation(newMot);
//      });

const fieldText = document.getElementById("alphabet")
const showLetter = document.getElementById("try_show");
const tries = document.getElementsByClassName("start")[0];
const displayResult = document.getElementById("alert");
const essaiList = document.getElementById("try_list");
const liError = document.getElementsByClassName("li-error")[0];
const liRestart = document.getElementsByClassName("start-again")[0];
const spanCount = document.createElement("span");
const spanCountError = document.createElement("span");


tries.appendChild(spanCount);
liError.appendChild(spanCountError);

let letterToCompare;
let count = 0;
let countWin = 0;
let countLose = 0;

// affiche l'emplacement du mot a trouvé en cachant le mot
function displayLocation() {
    showLetter.innerHTML = "";
    for (let i = 0; i < newMot.length; i++) {
        const letterSpan = document.createElement("span");
        showLetter.appendChild(letterSpan);
        letterSpan.textContent = newMot[i];
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
    let letterFound = false
    for (let i = 0; i < newMot.length; i++) {
        if (newMot[i] === letterToCompare) {
            const letterSpan = showLetter.getElementsByTagName("span")[i];
            letterSpan.classList.add("letter-ok");
            countWin++;
            letterFound = true;
            if (countWin === newMot.length) {
                const winner = document.createElement("h1");
                winner.textContent = "Vous avez gagné!!!🎉"
                displayResult.appendChild(winner);
                fieldText.removeEventListener("click", pickLetter);
            }
        }
    }
    if (letterFound === false) {
        countLose++;
        spanCountError.textContent = `${countLose}`;
        if (countLose > 8) {
            const loser = document.createElement("h1");
            loser.textContent = "Vous avez perdu... ☠"
            displayResult.appendChild(loser);
            fieldText.removeEventListener("click", pickLetter)
        }
    }
}

// affiché nb d'essai
function displayTries() {
    count++;
    spanCount.textContent = `${count}`;
}

//actualiser la page 
function startAgain(newMot) {
    return location.reload()
}

fieldText.addEventListener("click", pickLetter);
liRestart.addEventListener("click", startAgain);
