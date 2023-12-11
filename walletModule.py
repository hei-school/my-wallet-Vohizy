from prendreModule import prendreElements

wallet = {
    "CIN": 0,
    "CB": 0,
    "CV": 0,
    "PHOTO": 0,
    "Argent": 0,
}

argent = 0

def afficherContenuWallet():
    print(f"Contenu du wallet : CIN[{wallet['CIN']}], CB[{wallet['CB']}], CV[{wallet['CV']}], PHOTO[{wallet['PHOTO']}]")
    print(f"Argent dans le wallet : {argent} euros")

def ajouterElement(type):
    cle = f"C{type}"
    wallet[cle] += 1

def ajouterArgent():
    montant = float(input("Veuillez saisir une somme d'argent à ajouter au wallet : "))
    global argent
    argent += montant

def getWallet():
    return wallet

def gestionOptions():
    print("Options disponibles :")
    print("[1] Ajouter une carte d'identité (CIN)")
    print("[2] Ajouter une carte bancaire (CB)")
    print("[3] Ajouter un carte de visite (CV)")
    print("[4] Ajouter une photo (PHOTO)")
    print("[5] Ajouter l'argent")
    print("[6] Prendre des éléments du wallet")
    print("[7] Voir le contenu du wallet")
    print("[8] Quitter")

    choix = input("Veuillez sélectionner une option (1-8) : ")

    if choix in ["1", "2", "3", "4"]:
        ajouterElement(choix)
    elif choix == "5":
        ajouterArgent()
    elif choix == "6":
        prendreElements()
    elif choix == "7":
        afficherContenuWallet()
    elif choix == "8":
        print("Au revoir !")
    else:
        print("Option invalide.")

    afficherContenuWallet()
    gestionOptions()

if __name__ == "__main__":
    gestionOptions()
