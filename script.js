// When the user inputs an option (rock, paper scissors)
// Store in a string variable
// Compare user input to possible options
// Output if user won, lost, or drew

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Pick Rock, Paper, or Scissors: ");
    if (choice.toLowerCase() == "rock") {
        return "rock";
    } else if (choice.toLowerCase() == "paper") {
        return "paper";
    } else if (choice.toLowerCase() == "scissors") {
        return "scissors";
    } else {
        return "Not valid input";
    }
}

console.log(getHumanChoice());