import * as promptSync from "prompt-sync";
import * as walletModule from "./walletModule";

const prompt = promptSync();

// Afficher le message de bienvenue
console.log("Bienvenue sur le wallet !");

// Demander à l'utilisateur de saisir son nom
let nom: string = prompt("Veuillez saisir votre nom : ");
/* let dateNaissance: string = prompt("Veuillez saisir votre date de naissance : ");
 */
console.log(`Bienvenue, ${nom} !`);

// Démarrer la gestion des options
walletModule.gestionOptions();
