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

console.log(getComputerChoice());