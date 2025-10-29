/* variables */

let humanScore = 0;
let computerScore = 0;

let humanDiv = document.querySelector('#playerResult')
let machineDiv = document.querySelector('#machineResult')

let buttons = document.querySelector('.buttons')

/* Functions */

function getComputerChoice () {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i === 1) {
        return 'rock';
    }
    else if (i === 2) {
        return 'paper';
    }
    else if (i === 3) {
        return 'scissors';
    }          
}

function getHumanChoice () {
    let choice = prompt('What is your choice?')
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log('It\'s a draw!');
        return;
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
                (humanChoice === 'paper' && computerChoice === 'rock') ||
                (humanChoice === 'scissors' && computerChoice === 'paper')) {
                console.log('You won! ' + humanChoice + ' beats ' + computerChoice + ' !');
                humanScore++;
                }
    else {
            console.log('You lost! ' + computerChoice + ' beats ' + humanChoice + ' !');
            computerScore++;
    }
}

/* On load */

window.onload = function () {
    humanDiv.textContent = humanScore
    machineDiv.textContent = computerScore
}

/* listener */

buttons.addEventListener('click', (event) => {
    let target = event.target
})