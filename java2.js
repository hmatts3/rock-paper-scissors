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

const result = document.querySelector('#result');

result.setAttribute('style', 'white-space: pre;');

function playRound(userInput, computerSelection) {
    if (userInput === computerSelection) {
        result.textContent = `You chose ${userInput} \n CPU chose ${computerSelection} \r\n\r\nTie! Try again! \r\nThe score is ${playerWins}-${cpuWins}`;
    }
    else if ((userInput === 'Paper' && computerSelection === 'Rock') || (userInput === 'Scissors' && computerSelection === 'Paper') || (userInput === 'Rock' && computerSelection === 'Scissors')) {
        result.textContent = `You chose ${userInput} \nCPU chose ${computerSelection} \r\n\r\nYou Win! ${userInput} beats ${computerSelection}. \r\nThe score is ${++playerWins}-${cpuWins}`;
    }
    else if ((userInput === 'Rock' && computerSelection === 'Paper') || (userInput === 'Paper' && computerSelection === 'Scissors') || (userInput === 'Scissors' && computerSelection === 'Rock')){
        result.textContent = `You chose ${userInput} \nCPU chose ${computerSelection} \r\n\r\nYou Lose! ${computerSelection} beats ${userInput}. \r\nThe score is ${playerWins}-${++cpuWins}`;
    }
    else if (userInput===null) {
        result.textContent = 'Canceled';
    }
    else {
        result.textContent = `You entered an incorrect value. \nThe score is ${playerWins}-${cpuWins}`
    }
}

// added a counter for the score.
// Loop the game so that it repeats 5 times, and at the end, declares a winner. 



// for (let i=0; ;i++) {
//   userInput = convertCase(userInput);
//   computerSelection = getComputerChoice();
//   console.log(playRound(userInput, computerSelection));
//   if (playerWins===5) {
//     alert(`You win! The final score is ${playerWins}-${cpuWins}`);
//     console.log('Game over. You Win!')
//     break;
//   } 
//   else if (userInput===null) {
//     break;
//   }
//   else if (cpuWins===5) {
//     alert(`Game over. You Lose. The final score is ${playerWins}-${cpuWins}`);
//     console.log('Game over. You lose.')
//     break;
//   } 
// }

// Instead, make it first to 3 (Best of 5. Declare a winner)

// Revisited

const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');


const buttons = document.querySelectorAll('button');

rock.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
    finalscore();
    });

paper.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
    finalscore();
    });

scissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
    finalscore();
    });

function finalscore() {
if (playerWins===5) {
     alert(`You win! The final score is ${playerWins}-${cpuWins}`);
     result.textContent = 'Game over. You Win! \r\n';
     playAgain();
   } 
   else if (cpuWins===5) {
     alert(`Game over. You Lose. The final score is ${playerWins}-${cpuWins}`);
     result.textContent = 'Game over. You lose. \r\n';
     playAgain();
   } 
}

function playAgain() {
    rock.remove();
    paper.remove();
    scissors.remove();
    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play Again';
    result.appendChild(playAgain);
    playerWins = 0;
    cpuWins = 0;
    result.addEventListener ('click', () => {
        window.location.reload();
    })
};