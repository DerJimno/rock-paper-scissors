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

    const youChoice = document.querySelector(".youChoice")
    const cpuChoice = document.querySelector(".cpuChoice")

    const score = document.querySelector('#score')

    if (computerSelection.toLowerCase() === playerSelection.toLowerCase()) {
        score.textContent = "{{{it's a tie}}}";}
    else if (computerSelection.toLowerCase() === "rock" && playerSelection.toLowerCase() === "scissors"){
        cpuScore++;
        cpuChoice.style = "transform: scale(1.6); transition: 1s ;";
        youChoice.style = "transform: scale(1.0); transition: 1s ;";
        score.textContent = "{{{You lost, your Scissors suck}}}";}
    else if (computerSelection.toLowerCase() === "scissors" && playerSelection.toLowerCase() === "paper"){
        cpuScore++;
        cpuChoice.style = "transform: scale(1.6); transition: 1s ;";
        youChoice.style = "transform: scale(1.0); transition: 1s ;";
        score.textContent = "{{{You lost, Paper is just Paper}}}";}
    else if (computerSelection.toLowerCase() === "paper" && playerSelection.toLowerCase() === "rock"){
        cpuScore++;
        cpuChoice.style = "transform: scale(1.6); transition: 1s ;";
        youChoice.style = "transform: scale(1.0); transition: 1s ;";
        score.textContent = '{{{You lose, who said "rock-solid"?!}}}';}
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        playerScore++;
        youChoice.style = "transform: scale(1.6); transition: 1s ;";
        cpuChoice.style = "transform: scale(1.0); transition: 1s ;";
        score.textContent = "{{{You won, broke those Scissors}}}";}
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        playerScore++;
        youChoice.style = "transform: scale(1.6); transition: 1s ;";
        cpuChoice.style = "transform: scale(1.0); transition: 1s ;";
        score.textContent = "{{{You win, cut it Baby}}}";}
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        playerScore++;
        youChoice.style = "transform: scale(1.6); transition: 1s ;";
        cpuChoice.style = "transform: scale(1.0); transition: 1s ;";
        score.textContent = "{{{You win, Paper is key! }}}";
    }
}

const imgs = document.querySelectorAll('.selection')

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
    computerScore.style = "transform: scale(1.5); transition: 160ms; color: red; ";
    score.style = "transform: scale(1.5); transition: 160ms ; ";
    reloadButton()
        
    
}
else if (playerScore === 5){
    score.textContent = " We have a winner 👌 ";
    youScore.style = "transform: scale(1.5); transition: 160ms; color: green; ";
    score.style = "transform: scale(1.5); transition: 160ms; ";
    reloadButton()
        
}
const youChoice = document.querySelector(".youChoice")
    if (img.id === "Paper") {
        youChoice.src = "icons/paper.png"}
    else if (img.id === "Rock") {
        youChoice.src = "icons/rock.png"}
    else {
        youChoice.src = "icons/scissors.png"
    }

const cpuChoice = document.querySelector(".cpuChoice")
    if (computerSelection === "Paper") {
        cpuChoice.src = "icons/paper.png"}

    else if (computerSelection === "Rock") {
        cpuChoice.src = "icons/rock.png"}

    else {
        cpuChoice.src = "icons/scissors.png"}

const audios = document.querySelectorAll('audio')
    audios.forEach((audio) => {
            
        if (audio.id === img.id) {
                audio.currentTime = 0;
                audio.play()
        }
        if (cpuScore === 5){
            if (audio.id === "gameOver") {
                audio.play()
            }
        }
        if (playerScore === 5){
            if (audio.id === "success") {
                audio.play()
            }   
        }
    })
})
})
