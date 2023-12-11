const prompt = require("prompt-sync")();
const prendreModule = require("./prendreModule");

let wallet = {
  CIN: 0,
  CB: 0,
  CV: 0,
  PHOTO: 0,
};
const objetElement = {
  C1: "CIN",
  C2: "CB",
  C3: "CV",
  C4: "PHOTO",
  C5: "Argent",
};

let argent = 0;

function afficherContenuWallet() {
  console.log(
    `Contenu du wallet : CIN[${wallet.CIN}], CB[${wallet.CB}], CV[${wallet.CV}], PHOTO[${wallet.PHOTO}]`
  );
  console.log(`Argent dans le wallet : ${argent} euros`);
}

function ajouterElement(type) {
  let cle = `${objetElement[`C${type}`]}`;
  wallet[cle] = 1;
}

function ajouterArgent() {
  let montant = prompt(
    "Veuillez saisir une somme d'argent à ajouter au wallet : "
  );
  argent += parseFloat(montant) || 0;
}

function getWallet() {
  return wallet;
}

function gestionOptions() {
  console.log("Options disponibles :");
  console.log("[1] Ajouter une carte d'identité (CIN)");
  console.log("[2] Ajouter une carte bancaire (CB)");
  console.log("[3] Ajouter un carte de visite (CV)");
  console.log("[4] Ajouter une photo (PHOTO)");
  console.log("[5] Ajouter l'argent");
  console.log("[6] Prendre des éléments du wallet");
  console.log("[7] Voir le contenu du wallet");
  console.log("[8] Quitter");

  let choix = prompt("Veuillez sélectionner une option (1-8) : ");

  switch (choix) {
    case "1":
    case "2":
    case "3":
    case "4":
      ajouterElement(choix);
      break;
    case "5":
      ajouterArgent();
      break;
    case "6":
      prendreModule.prendreElements(wallet);
      break;
    case "7":
      afficherContenuWallet();
      break;
    case "8":
      console.log("Au revoir !");
      return;
    default:
      console.log("Option invalide.");
  }

  afficherContenuWallet();
  gestionOptions();
}

module.exports = {
  gestionOptions,
  getWallet, // Ajout de la fonction getWallet
};
