import walletModule

objet_element = {
    "C1": "CIN",
    "C2": "CB",
    "C3": "CV",
    "C4": "PHOTO",
    "C5": "Argent",
}

def prendreElements():
    wallet = walletModule.getWallet()
    print("Options pour prendre des éléments du wallet :")
    print("[1] Prendre une carte d'identité (CIN)")
    print("[2] Prendre une carte bancaire (CB)")
    print("[3] Prendre un carte de visite (CV)")
    print("[4] Prendre une photo (PHOTO)")
    print("[5] Prendre de l'argent")
    print("[6] Revenir au menu principal")

    choix = input("Veuillez sélectionner une option (1-6) : ")

    if choix in ["1", "2", "3", "4"]:
        prendreElement(choix)
    elif choix == "5":
        prendreArgent()
    elif choix == "6":
        walletModule.gestionOptions()
    else:
        print("Option invalide.")
        prendreElements()

def prendreElement(type):
    wallet = walletModule.getWallet()
    cle = f"C{type}"
    if wallet[cle] > 0:
        wallet[cle] = 0
        print(f"Vous avez pris une {cle}.")
    else:
        print(f"Le wallet ne contient pas de {cle}.")

def prendreArgent():
    wallet = walletModule.getWallet()
    montant = float(input("Veuillez saisir la somme d'argent que vous souhaitez prendre : "))
    
    try:
        if montant > wallet["Argent"]:
            raise ValueError("Fonds insuffisants dans le wallet.")
        wallet["Argent"] -= montant
        print(f"Vous avez pris {montant} euros.")
    except ValueError as error:
        print(f"Erreur : {error}")
    prendreElements()
