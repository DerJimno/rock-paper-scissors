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

function roundResult(computerSelection, playerSelection) {

    const score = document.querySelector('#score')

    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        score.textContent = "{{{it's a tie}}}";}
    else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors"){
        cpuScore++;
        score.textContent = "{{{You lost, your Scissors suck}}}";}
    else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper"){
        cpuScore++;
        score.textContent = "{{{You lost, Paper is just Paper}}}";}
    else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock"){
        cpuScore++;
        score.textContent = '{{{You lose, who said "rock-solid"?!}}}';}
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        playerScore++;
        score.textContent = "{{{You won, broke those Scissors}}}";}
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        playerScore++;
        score.textContent = "{{{You win, cut it Baby}}}";}
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        playerScore++;
        score.textContent = "{{{You win, Paper is key! }}}";}
}



const imgs = document.querySelectorAll('img')

imgs.forEach((img) => {
    img.addEventListener("click", e => {
    playerSelection = img.id

    const computerSelection = computerPlay()
    const choose = document.querySelector('.explanation')
    choose.textContent=`You chose ${playerSelection}, the Cpu chose ${computerSelection}!`

roundResult(computerSelection, playerSelection)

const computerScore = document.querySelector('.computerScore')
const youScore = document.querySelector('.youScore')
computerScore.textContent = `${cpuScore}`
youScore.textContent = `${playerScore}`

    youScore.style = "color: green ; transition: 1.7s;"
    computerScore.style = "color: red; transition: 1.7s;"
    if (cpuScore + playerScore === 0 ) {
        youScore.style = "color: rgb(207, 132, 132);"
        computerScore.style = "color: rgb(207, 132, 132)"
    }
function reloadButton() {
    const reloadBtn = document.querySelector('#reloadBtn')
    const selections = document.querySelectorAll('.selection')
    reloadBtn.style = "visibility: visible; transition: 300ms;"
    selections.forEach((selection) => {
        selection.style = "visibility: hidden;"
    })
 }
        
if (cpuScore === 5){
    score.textContent = " Game Over, Loser 😛 ";
    computerScore.style = "transform: scale(1.5); transition: 160ms; color: red; "
    score.style = "transform: scale(1.5); transition: 160ms ; "
    reloadButton()
}
else if (playerScore === 5){
    score.textContent = " We have a winner 👌 ";
    youScore.style = "transform: scale(1.5); transition: 160ms; color: green; "
    score.style = "transform: scale(1.5); transition: 160ms ; "
    reloadButton()
};    


    }) 
    })