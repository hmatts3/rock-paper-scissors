
// Create a game of rock paper scissors
// generate a random function for CPU to pick

const RockPaperScissors = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
    const random = Math.floor(Math.random() * RockPaperScissors.length);
    return (RockPaperScissors[random]);
}

getComputerChoice ()

// Allow user to input
// If both selections are equal, then 'Tie! Try again'
// const Rock > Paper, Paper > Scissors, Scissors > Paper
// if computerSelection > playerSelection, return "You Lose!" 
// compare CPU selection to user's & Announce winner

function playRound(playerSelection, computerSelection) {
    let Rock = 'Rock';
    let Paper = 'Paper';
    let Scissors = 'Scissors';
    Rock > Scissors;
    Paper > Rock;
    Scissors > Paper;

    if (playerSelection > computerSelection) {
        return `${playerSelection} \n${computerSelection} \nYou Win! ${playerSelection} beats ${computerSelection}.`
    }

    else if (computerSelection > playerSelection) {
        return `${playerSelection} \n${computerSelection} \nYou Lose! ${computerSelection} beats ${playerSelection}.`
    }

    else {
        return `${playerSelection} \n${computerSelection} \nTie! Try again!`
    }

}

const playerSelection = 'Rock';
// edge case: convert player selection to first upper case, rest lower case
function convertPlayerSelectionCase (playerSelection) {
    return playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1);
}

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
