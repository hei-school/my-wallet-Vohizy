from walletModule import gestionOptions

# Afficher le message de bienvenue
print("Bienvenue sur le wallet !")

# Demander à l'utilisateur de saisir son nom
nom = input("Veuillez saisir votre nom : ")
print(f"Bienvenue, {nom} !")

# Démarrer la gestion des options
gestionOptions()