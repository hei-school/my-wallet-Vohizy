import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Afficher le message de bienvenue
        System.out.println("Bienvenue sur le wallet !");

        // Demander à l'utilisateur de saisir son nom
        System.out.print("Veuillez saisir votre nom : ");
        String nom = scanner.nextLine();
        /* System.out.print("Veuillez saisir votre date de naissance : ");
        String dateNaissance = scanner.nextLine(); */

        System.out.printf("Bienvenue, %s !%n", nom);

        // Démarrer la gestion des options
        WalletModule.gestionOptions();
    }
}
