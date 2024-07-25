console.log("Hello Cunts! Welcome to Rock Paper Scissors!");

//Get the computers choice and store it in the variable getComputerChoice.//
const getComputerChoice = () => {
    let num = Math.floor(Math.random()*99);
    console.log(num);

    if (num < 34) {
        return 'Rock';
    } else if (num < 67) {
        return 'Paper';
    } else if (num < 100) {
        return 'Scissors';
    } else { 
        console.log("Shit! I've fucked something up here." );
    }
}; 

//Get the humans input and store it in the variable getHumanChoice.//

const getHumanChoice = () => {
    let humanChoice = prompt("Please type your choice...Rock, Paper or Scissors!");
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        return 'Please enter Rock, Paper, or Scissors ya spastic!';
    } else {
        return `You choose ${humanChoice}.`;
    }
};

console.log(getHumanChoice());

//create variables to track the players score and computers score. Initial score is 0. 
let humanScore = 0;
let computerScore = 0;

