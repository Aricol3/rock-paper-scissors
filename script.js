function getComputerChoice() {
    let availableChoices = ["rock", "paper", "scissors"];
    return availableChoices[Math.floor(Math.random() * 3)]
}

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
rock.addEventListener('click', () => playRound('rock', getComputerChoice()));
paper.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors', getComputerChoice()));

let playerSign = document.getElementById('playerSign');
let computerSign = document.getElementById('computerSign');
let playerScoreDOM = document.getElementById('playerScore');
let computerScoreDOM = document.getElementById('computerScore');

let nextRoundDOM = document.getElementById('next');

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    nextRoundDOM.disabled=false;
    updateChoices(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        playerScoreDOM.textContent = `Player: ${++playerScore}`
        computerScoreDOM.textContent = `Computer: ${++computerScore}`
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScoreDOM.textContent = `Player: ${++playerScore}`
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScoreDOM.textContent = `Computer: ${++computerScore}`
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            playerSign.textContent = '✊'
            break
        case 'paper':
            playerSign.textContent = '✋'
            break
        case 'scissors':
            playerSign.textContent = '✌️'
            break
    }

    switch (computerSelection) {
        case 'rock':
            computerSign.textContent = '✊'
            break
        case 'paper':
            computerSign.textContent = '✋'
            break
        case 'scissors':
            computerSign.textContent = '✌️'
            break
    }
}

function nextRound() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    nextRoundDOM.disabled = true;
    playerSign.textContent="❔";
    computerSign.textContent="❔";
}

function startGame() {
    document.getElementById('start-button').style.display = "none";
    document.getElementById('game').style.display = "block"
}

document.getElementById('game').style.display = "none"