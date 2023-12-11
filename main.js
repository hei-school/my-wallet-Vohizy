const prompt = require("prompt-sync")();
const walletModule = require("./walletModule");
const prendreModule = require("./prendreModule");

// Afficher le message de bienvenue
console.log("Bienvenue sur le wallet !");

// Demander à l'utilisateur de saisir son nom et sa date de naissance
let nom = prompt("Veuillez saisir votre nom : ");
/* let dateNaissance = prompt("Veuillez saisir votre date de naissance : ");
 */
console.log(`Bienvenue, ${nom} !`);

// Démarrer la gestion des options
walletModule.gestionOptions();
