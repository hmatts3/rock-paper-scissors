// Just going to mark / understand the code line-by-line





// First step. Understand that rockpaperscissors is going to be a function of two inputs, the player's selection, and the CPU's. 
// Let's focus on those inputs first. The user will be a prompt, and the string should convert into first upper rest lower. Accept each. 


// declare variables
let userInput = convertCase();
let x;

// state that user's selection should come from the prompt
// can the userInput variable below be any variable? After below test, yes 
function convertCase (x) {
    x = prompt();
    if (x === null) {
        return null;
    }
    else {
    return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
    }
}

// adding this function definition from below comment
// userInput= convertCase(x);


// Next, the cpu's selection. 
// Just random from Stack Overflow. It seems like it is taking the length of the array, and picking a random number from it. Floor rounds it down, so that it is a whole int. I'm guessing it can be 0, 1, or 2? Let's test
// As expected, without floor, it goes from 0-3. Which is a bit weird since that's 4 numbers. But maybe the length is 3. 
// Now trying with floor, but no weird random with var.
// so that gets me a number 0, 1, or 2. 
// and then to integrate it, it's the array(const), which is weird. I don't know that i've seen that before. Maybe arrays have some features like that.
// also interesting how it has to be brackets, not parentheses 

const RockPaperScissors = ['Rock', 'Paper', 'Scissors']

function getComputerChoice () {
    const random = Math.floor(Math.random() * RockPaperScissors.length);
    return RockPaperScissors[random];
}

let computerSelection = getComputerChoice();
// declaring the variable as the function

//Next step macro is just creating the scenarios, where after each round a message is produced. It's a different message for each result, but similar if you win, and similar if you lose. 
// Basically, if you win, I'll say that and restate your choice and the CPU's choice. I'll also keep track of your score if you play multiple times using a counter

// at first, I had the counter inside the function, then it would always reset. By declaring these variables before the function, the function only starts there and keeps changing

// as an experiment, let's see what happens if this is the last of the code. Meaning, would it still count if there were no loop? My guess - yes. 

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
// weird how you need to set the parameters for this function. I don't know when we need parameters, and when we don't?
// console.log(playRound(userInput, computerSelection))
// interesting how this does not work, let me go back and add a definition to userInput as a variable. Just did. 
// Seems like that does work (as does using a generic variable for the convert Funcion. To avoid confusion, I'd say it's better to use diff variables, as they're used separately - different scopes.)

// RESULT = works, now. Game ends after one round 

console.log(playRound(userInput, computerSelection))


// Now, it is time 



for (let i=0; ;i++) {
// userInput = convertCase(userInput); commenting this code out, because it's now defined globally
// computerSelection = getComputerChoice(); this one is also defined globally 
// looks like For runs automatically, that is a call (invoke)? 
// What we're doing for the rest of the code, is simply executing playRound, 
// Then, we're adding a message at the end of the game. I've called on it to break,if player wins =3, and same thing if cpuWins = 3. If the user says Cancel, then the loop will break.
// There is no end condition to loops, so it would go on in perpetuity if there weren't breaks coded in. 


// So this actually broke the code. It's looping in perpetuity. // Why do userInput & computerSelection need to be redefined?
// // Also, there's a user input before the user Input... an extra box. Why does line 28 run it??
//   userInput = convertCase(x);
//   computerSelection = getComputerChoice();
  console.log(playRound(convertCase(x), getComputerChoice()));
  //Shortened^
  // something is not working here
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




// Ok, so this works. My final outstanding questions are: 
// why do I need to reinitiate user Input and computer choice
// why does defining it even reinitiate it
// why do I need to set a parameter for userInput
// Why isn't the variables user Input and computer selection enough to run the function, if by definition, they are the function?
// As I type that, I realize a variable probably != a function. When the inputs were a variable, it was a single choice, that was ran repeatedly.
// putting in the functions as parameters forces those functions to be invoked newly for each loop. 
// Interesting. It still feels like the variable should be different each time. Idk.
// Ok, let's learn more
