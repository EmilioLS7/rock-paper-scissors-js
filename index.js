let choices = ['Rock', 'Paper', 'Scissors'];
let randomPick = choices[Math.floor(Math.random() * choices.length)];

function getComputerChoice() {
    return randomPick;
};

function playRound(playerSelection, computerSelection) {
    getComputerChoice();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return 'Tie!';
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return 'You lose! Paper beats rock';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper';
    }
}
let playerSelection = 'Rock';
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))