let availableChoices = ["rock", "paper", "scissors"];

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getComputerChoice() {
    return availableChoices[randomIntFromInterval(0, 2)];
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === "rock" && computerSelection === "paper":
            return "You Lose! Paper beats Rock";
            break;
        case playerSelection === "rock" && computerSelection === "scissors":
            return "You Win! Rock beats Scissors";
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            return "You Win! Paper beats Rock";
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            return "You Lose! Scissors beats Paper";
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            return "You Lose! Rock beats Scissors";
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            return "You Win! Scissors beats Paper";
            break;
        default:
            return "Tie!";
            break;
    }
}

for (let i = 0; i < 0; i++) {
    const playerSelection = prompt();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}