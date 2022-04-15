function computerPlay(){
    let randomRPS = Math.floor(Math.random()*3) + 1;
        if (randomRPS === 1)
            return "Rock";
        else if (randomRPS === 2)
            return "Paper";
        else
            return "Scissors";
}


let cpuScore = 0
let playerScore = 0


function roundResult(computerSelection, playerSelection){
        
    if (computerSelection.toLowerCase() === playerSelection.toLowerCase())
        return `Same brain! You both chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()}`;
    else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors"){
        cWinner = "you lose, Rock beats Scissors";
        cpuScore++;
        return cWinner}
    else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper"){
        cWinner = `you lose, Scissors beat Paper`;
        cpuScore++;
        return cWinner}
    else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock"){
        cWinner = `you lose, Paper beats Rock`;
        cpuScore++;
        return cWinner}
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        pWinner = `you win, Rock beats Scissors`;
        playerScore++;
        return pWinner}
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        pWinner = `you win, Scissors beat Paper`;
        playerScore++;
        return pWinner}
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        pWinner= `you win, Paper beats Rock`;
        playerScore++;
        return pWinner}
    else 
    return 'what the Heck did you just chose!';   
}






function game(){
    for (let i = 0; i < Infinity; i++) {
        const playerSelection = prompt("Please choose one: Rock, Paper or Scissors", "Rock");
        const computerSelection = computerPlay();
        console.log(roundResult(computerSelection , playerSelection));
      
        if (cpuScore === 5){
        break;   
    }
        else if (playerScore === 5){
        break; 
    }
}

    if (cpuScore === 5)
    return `Cpu wins, Cpu: ${cpuScore}, You:  ${playerScore}`
    else if (playerScore === 5)
    return `You win, You: ${playerScore}, Cpu:  ${cpuScore}`
    else
    return ""   
}
console.log(game())