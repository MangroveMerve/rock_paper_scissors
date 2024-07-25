console.log("Hello Cunts! Welcome to Rock Paper Scissors!");

//Get the computers choice and store it in the variable getComputerChoice.//
const getComputerChoice = () => {
    let num = Math.floor(Math.random()*99);
    console.log(num);

    if (num < 34) {
        return 'rock';
    } else if (num < 67) {
        return 'paper';
    } else if (num < 100) {
        return 'scissors';
    } else { 
        console.log("Shit! I've fucked something up here." );
    }
}; 
let computerChoice = getComputerChoice();
//Get the humans input and store it in the variable getHumanChoice.//

const getHumanChoice = () => {
    let hChoice;
//Using a 'do while' loop to make sure the user is re-prompted if they make an incorrect entry. 
    do {
        hChoice = prompt("Please type your choice... Rock, Paper, or Scissors!");
        hChoice = hChoice.toLowerCase();
    } while (hChoice !== 'rock' && hChoice !== 'paper' && hChoice !== 'scissors');

    return hChoice;
};

let humanChoice = getHumanChoice();
console.log(humanChoice);

//create variables to track the players score and computers score. Initial score is 0. 
let humanScore = 0;
let computerScore = 0;

//play a single round of Rock Paper Scissors. Create a function that compares humanChoice & computerChoice and adds to the winners score. 

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return `Draw cuns! Try again!`; 
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore ++;
        return `You chose ${humanChoice} against the computer's choice of ${computerChoice}. You win g.`;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore ++;
        return `You chose ${humanChoice} against the computer's choice of ${computerChoice}. You win g.`;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore ++;
        return `You chose ${humanChoice} against the computer's choice of ${computerChoice}. You win g.`;
    } else {
        computerScore ++; 
        return `You chose ${humanChoice} against the computer's choice of ${computerChoice}. You lost this one.`;
    }
};

console.log(playRound(humanChoice, computerChoice));