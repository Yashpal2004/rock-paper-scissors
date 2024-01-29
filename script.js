let choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playTurn(plr) {
    let computerSelection = getComputerChoice();
    let playerSelection = plr;
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

    console.log("Player: " + playerSelection + " - Computer: " + computerSelection + " !!! ---  " + roundWinner + " Wins!!")
    
}

window.onload = function() {
  document.getElementById("ROCK").addEventListener("click", function(){playTurn("ROCK");});
  document.getElementById("PAPER").addEventListener("click", function(){playTurn("PAPER");});
  document.getElementById("SCISSORS").addEventListener("click", function(){playTurn("SCISSORS");});
};