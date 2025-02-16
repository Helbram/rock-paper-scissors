// When the user inputs an option (rock, paper scissors)
// Store in a string variable
// Compare user input to possible options
// Output if user won, lost, or drew

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Pick Rock, Paper, or Scissors: ");
    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        console.log("Not valid input, please try again.");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    
    if (humanChoice === computerChoice) {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}!`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}!`);
        computerScore++;
    }
}

function playGame() {
    for (let index = 0; index < 5; index++) {
        playRound();
    }
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won ${humanScore} to ${computerScore}!`);
    } else {
        console.log(`Too bad! You lost ${humanScore} to ${computerScore}!`);
    }
}