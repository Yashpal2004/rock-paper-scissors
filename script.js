let choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playTurn() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("ENTER : ROCK , PAPER , SCISSORS");
    let roundWinner;

    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
      }
      if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        roundWinner = 'player'
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        roundWinner = 'computer'
    }

    console.log(roundWinner + " Wins!!")
    
}

for (let i = 0; i < 5; i++) {
    playTurn();
}