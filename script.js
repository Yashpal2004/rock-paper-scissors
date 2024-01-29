let choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

let playerPoints = 0;
let computerPoints = 0;

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
        playerPoints = playerPoints + 1;
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        roundWinner = 'computer'
        computerPoints = computerPoints + 1;
    }

    document.getElementById("Points").innerHTML = "Player Points: " + playerPoints + "  |  " + "Computer Points: " + computerPoints;

    document.getElementById("Result").innerHTML = "Player: " + playerSelection + " - Computer: " + computerSelection + " !!! ---  " + roundWinner + " Wins!!"

    if (playerPoints === 5) {
      document.getElementById("Result").innerHTML = "Player Wins The GAME!!!!"
      playerPoints = 0;
      computerPoints = 0;
    }
    if (computerPoints === 5) {
      document.getElementById("Result").innerHTML = "Computer Wins The GAME!!!!"
      computerPoints = 0;
      playerPoints = 0;
    }
}

window.onload = function() {
  document.getElementById("ROCK").addEventListener("click", function(){playTurn("ROCK");});
  document.getElementById("PAPER").addEventListener("click", function(){playTurn("PAPER");});
  document.getElementById("SCISSORS").addEventListener("click", function(){playTurn("SCISSORS");});
};