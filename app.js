const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const choices = document.querySelectorAll('button');
let userChoice
let computerChoice


choices.forEach(choice =>  choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;  
    generateComputerChoice();
    getResults();

}));
    function generateComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3) + 1
        if (randomNumber === 1) {
            computerChoice = 'rock';
        }
        if (randomNumber === 2) {
            computerChoice = 'scissors';
        }
        if (randomNumber === 3) {
            computerChoice = 'paper';
        }
        computerChoiceDisplay.innerHTML = computerChoice;
    } 

    function getResults() {
        let result; 
        if (userChoice === computerChoice) {
            result = 'It is a tie!'; // Assign value to result
        } else if (userChoice === 'rock' && computerChoice === 'scissors') {
            result = 'You win!';
        } else if (userChoice === 'rock' && computerChoice === 'paper') {
            result = 'You lose!';
        } else if (userChoice === 'scissors' && computerChoice === 'rock') {
            result = 'You lose!';
        } else if (userChoice === 'scissors' && computerChoice === 'paper') {
            result = 'You win!';
        } else if (userChoice === 'paper' && computerChoice === 'rock') {
            result = 'You win!';
        } else if (userChoice === 'paper' && computerChoice === 'scissors') {
            result = 'You lose!';
        }
        resultDisplay.innerHTML = result; // Set innerHTML of resultDisplay
    }
    