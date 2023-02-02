// Create a game of rock paper scissors
// generate a random function for CPU to pick

const RockPaperScissors = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
    const random = Math.floor(Math.random() * RockPaperScissors.length);
    return (RockPaperScissors[random]);
}

// Allow user to input. (define variable)
// edge case: convert player selection to first upper case, rest lower case

let playerSelection = 'rock';
function convertPlayerSelectionCase (playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}
playerSelection = convertPlayerSelectionCase(playerSelection)


// If both selections are equal, then 'Tie! Try again'
// define Rock > Paper, Paper > Scissors, Scissors > Paper
// if computerSelection > playerSelection, return "You Lose!" & compare selections

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `${playerSelection} \n${computerSelection} \nTie! Try again!`
    }
    else if ((playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Rock' && computerSelection === 'Scissors')) {
        return `${playerSelection} \n${computerSelection} \nYou Win! ${playerSelection} beats ${computerSelection}.`
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')){
        return `${playerSelection} \n${computerSelection} \nYou Lose! ${computerSelection} beats ${playerSelection}.`
    }
    else {
        return `You entered an incorrect value.`
    }
}


// play 5 rounds (up to 5 playerSelection s 5 computer Selection s)
// return score after each round. (In addition to previous message)
// User inputs new value each round
// After 5 rounds, return the winner and final score
// I want it to ask me for a selection, run the function playRound, display the result of playRound, plus the score of this round, and then at the end say game over



// What's happening? If I run game(), then if I win, I get 1 + playerwin. Playerwin = 0. 

function game () {
    
    console.log(playRound(playerSelection, computerSelection));
    if  ((playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Rock' && computerSelection === 'Scissors')) {
        return `The score is ${++playerWin}-${cpuWin}`
    }
    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        return 
    }
    else {
        return `The score is ${playerWin}-${cpuWin}`
    }
}


for (let i=0; i<5; i++) {
    let playerWin = 0;
    let cpuWin = 0;
    playerSelection = prompt();
    playRound(playerSelection, computerSelection);
    if  ((i < 5) && (playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
        console.log(playRound(playerSelection,computerSelection) + `The score is ${playerWin}-${++cpuWin}`)
    }
    else if  ((i < 5) && (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper') || (playerSelection === 'Rock' && computerSelection === 'Scissors')) {
        console.log(playRound(playerSelection,computerSelection) + `The score is ${++playerWin}-${cpuWin}`)
    }

    }