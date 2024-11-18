"use strict"

const tabMot = ["DEVELOPPEUR", "INTEGRATEUR", "CLIENT", "SERVEURS", "JAVASCRIPT", "REACTJS", "SYMFONY", "MYSQL", "BOOTSTRAP", "NAVIGATEUR", "INTERNET", "FRAMEWORK", "TAILWIND", "MOZILLA", "CHROME", "FREELANCE", "CONCEPTEUR", "APPLICATION","MERISE","HTML","STYLE","TERMINAL"];

const motAlea = tabMot[Math.floor(Math.random()*tabMot.length)];
console.log(motAlea);


/**
 * affiché lettre alphabet, pouvoir en seletionné une et comparer si present dans le mot choisi ou pas
 * inclu : affiché la lettre aux bons index
 * non inclus : ne rien faire
 * disabled les lettre deja choisi
 * compteur +1 a chaque click, affiché nombre d'essai, compteur max = 20
 * nb erreur 10 max
 * si mot complet fin du jeu gagné sinon perdu
 */