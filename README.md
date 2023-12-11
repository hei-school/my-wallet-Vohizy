# Wallet

## Description

This wallet project is designed to be simple and user-friendly, supporting only the following items: 1 National ID (CIN), 1 Bank Card (CB), 1 Business Card (CV), 1 Photo, and Euro currency. Its simplicity makes it accessible to everyone.

The project's operation is as follows: upon startup, it greets the user in the wallet and prompts them to enter their name to identify the owner. Then, the user has the option to choose from various actions, including adding items, taking items, or exiting the wallet.

It's essential to note that the user can take an item from the wallet only once. If the user wishes to take another item, they must return to the main menu and select the option to take items again. If the item the user is trying to take does not exist in the wallet, the program displays a message stating that the wallet does not contain that item.

## Installation

To run the provided JavaScript code, you'll need to install the `prompt-sync` module. Follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where your JavaScript file is located.

3. Run the following command to install `prompt-sync` using npm (Node Package Manager):

```bash
npm install prompt-sync

## Bugs

For the Python version of the project, there is a bug when taking an item from the wallet. Please be aware of this and take the necessary steps to address the issue.

## Technologies Used

The project was developed using four main technologies: JavaScript, Java, Python, and TypeScript.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
