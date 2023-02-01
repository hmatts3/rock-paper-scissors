// Create a game of rock paper scissors
// generate a random function for CPU to pick

const RockPaperScissors = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
    const random = Math.floor(Math.random() * RockPaperScissors.length);
    return (RockPaperScissors[random]);
}

// Allow user to input. (define variable)
// If both selections are equal, then 'Tie! Try again'
// define Rock > Paper, Paper > Scissors, Scissors > Paper
// if computerSelection > playerSelection, return "You Lose!" & compare selections
// edge case: convert player selection to first upper case, rest lower case

let playerSelection = 'rock';
function convertPlayerSelectionCase (playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
}

playerSelection = convertPlayerSelectionCase(playerSelection)


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

const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));



// play 5 rounds (up to 5 playerSelection s 5 computer Selection s)
// Keep score after each round. 
// Declares a winner at the end (first to 3 wins)

for (let i = 0; i <5; i++) {
    function game() {
        playerSelection = prompt('Pick one','')
        playRound(playerSelection, computerSelection);
        let playerWins= 0;
        let cpuWins = 0;
    if (playerSelection > computerSelection) {
        playerWins++ ;
        return `You Win. The score is ${playerWins}-${cpuWins}`;
    }
    else if (computerSelection > playerSelection) {
        cpuWins++;
        return `You Lose. The score is ${playerWins}-${cpuWins}`;
    }
    else {
        return `Tie. The score is ${playerWins}-${cpuWins}`
    }
    }
    }

game()
