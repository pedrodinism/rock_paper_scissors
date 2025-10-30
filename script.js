/* variables */

let humanScore = 0;
let computerScore = 0;

let humanDiv = document.querySelector('#playerScore')
let machineDiv = document.querySelector('#machineScore')

let humanResult = document.querySelector('#playerResult')
let machineResult = document.querySelector('#machineResult')

let buttons = document.querySelector('.buttons')

let result = document.querySelector('.results')
let finalResult = document.querySelector('.finalResult')

/* Functions */

function getComputerChoice () {
    let i = Math.floor(Math.random() * 3) + 1;
    let result = ""
    if (i === 1) {
        result = 'rock';
    }
    else if (i === 2) {
        result = 'paper';
    }
    else if (i === 3) {
        result = 'scissors';
    }
    machineResult.textContent = result
    return result          
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        finalResult.textContent = 'It\'s a draw!'
        finalResult.style.background = 'yellow'
        return;
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper')) {
                finalResult.textContent =  'You won!' 
                finalResult.style.background = 'lightgreen'
                humanScore++;
             }
    else {
            finalResult.textContent = 'You lost!'
            finalResult.style.background = 'red'
            computerScore++;
    }
    updateScores()
    showWinner()
}

function updateScores () {
    humanDiv.textContent = humanScore
    machineDiv.textContent = computerScore
}

function showWinner () {
    if (humanScore === 5 || computerScore === 5) {
        buttons.style.display = 'none'
        result.style.display = 'none'
    }
}

/* On load */

window.onload = updateScores()

/* listener */

buttons.addEventListener('click', (event) => {
    let choice = event.target.id
    if (choice != "") {
        humanResult.textContent = choice
        playRound(choice, getComputerChoice())
    }

})