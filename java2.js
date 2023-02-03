// generate a random function for CPU to pick

const RockPaperScissors = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
    const random = Math.floor(Math.random() * RockPaperScissors.length);
    return (RockPaperScissors[random]);
}

let computerSelection = getComputerChoice();

// prompt player Input; convert to first upper case, rest lower case

let userInput;

function convertCase (userInput) {
    userInput = prompt();
    if (userInput === null) {
        return null;
    }
    else {
    return userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    }
}

// After conversion of player choice, & random CPU choice, if (Paper > Rock)... etc., restate both choices and describe Winner. 

let cpuWins = 0;
let playerWins = 0;

function playRound(userInput, computerSelection) {
    if (userInput === computerSelection) {
        return `You chose ${userInput} \nCPU chose ${computerSelection} \nTie! Try again! \nThe score is ${playerWins}-${cpuWins}`
    }
    else if ((userInput === 'Paper' && computerSelection === 'Rock') || (userInput === 'Scissors' && computerSelection === 'Paper') || (userInput === 'Rock' && computerSelection === 'Scissors')) {
        return `You chose ${userInput} \nCPU chose ${computerSelection} \nYou Win! ${userInput} beats ${computerSelection}. \nThe score is ${++playerWins}-${cpuWins}`
    }
    else if ((userInput === 'Rock' && computerSelection === 'Paper') || (userInput === 'Paper' && computerSelection === 'Scissors') || (userInput === 'Scissors' && computerSelection === 'Rock')){
        return `You chose ${userInput} \nCPU chose ${computerSelection} \nYou Lose! ${computerSelection} beats ${userInput}. \nThe score is ${playerWins}-${++cpuWins}`
    }
    else if (userInput===null) {
        return 'Canceled';
    }
    else {
        return `You entered an incorrect value. \nThe score is ${playerWins}-${cpuWins}`
    }
}

// added a counter for the score.
// Loop the game so that it repeats 5 times, and at the end, declares a winner. 



for (let i=0; ;i++) {
  userInput = convertCase(userInput);
  computerSelection = getComputerChoice();
  console.log(playRound(userInput, computerSelection));
  if (playerWins===3) {
    alert(`You win! The final score is ${playerWins}-${cpuWins}`);
    console.log('Game over. You Win!')
    break;
  } 
  else if (userInput===null) {
    break;
  }
  else if (cpuWins===3) {
    alert(`Game over. You Lose. The final score is ${playerWins}-${cpuWins}`);
    console.log('Game over. You lose.')
    break;
  } 
}

// Instead, make it first to 3 (Best of 5. Declare a winner)
