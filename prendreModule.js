const prompt = require("prompt-sync")();
const walletModule = require("./walletModule");
const objetElement = {
  C1: "CIN",
  C2: "CB",
  C3: "CV",
  C4: "PHOTO",
  C5: "Argent",
};

function prendreElements(wallet) {
  console.log("Options pour prendre des éléments du wallet :");
  console.log("[1] Prendre une carte d'identité (CIN)");
  console.log("[2] Prendre une carte bancaire (CB)");
  console.log("[3] Prendre un carte de visite (CV)");
  console.log("[4] Prendre une photo (PHOTO)");
  console.log("[5] Prendre de l'argent");
  console.log("[6] Revenir au menu principal");

  let choix = prompt("Veuillez sélectionner une option (1-6) : ");

  switch (choix) {
    case "1":
    case "2":
    case "3":
    case "4":
      prendreElement(choix, wallet); // Utilisez getWallet() sans les parenthèses
      break;
    case "5":
      prendreArgent();
      break;
    case "6":
      walletModule.gestionOptions; // Utilise gestionOptions au lieu de prendreElements
      return;
    default:
      console.log("Option invalide.");
  }

  prendreElements();
}

function prendreElement(type, wallet) {
  const cle = objetElement[`C${type}`];
  if (wallet && wallet[cle] > 0) {
    wallet[cle] = 0;
    console.log(`Vous avez pris une ${cle}.`);
  } else {
    console.log(`Le wallet ne contient pas de ${cle}.`);
  }
}

function prendreArgent() {
  let montant = prompt(
    "Veuillez saisir la somme d'argent que vous souhaitez prendre : "
  );

  try {
    if (parseFloat(montant) > argent) {
      throw new Error("Fonds insuffisants dans le wallet.");
    }
    argent -= parseFloat(montant);
    console.log(`Vous avez pris ${montant} euros.`);
  } catch (error) {
    console.log(`Erreur : ${error.message}`);
  }
  prendreElements();
}

module.exports = {
  prendreElements,
  prendreElement,
  prendreArgent,
};
