// gamescript.js for rock-scissors-paper
console.log('Testing gamescript')

function getComputerChoice(){
    const roll = Math.random() * 3;
    // console.log(roll)

    if (roll < 1) return "rock";
    else if (roll > 2) return "paper";
    else return "scissors" ;
}

function playRound(computerChoice, playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == 'rock'){
        if (computerChoice == 'rock') return "Tie";
        if (computerChoice == 'paper') return "Paper covers rock. I win.";
        if (computerChoice == 'scissors') return "Rock breaks scissors.  You win.";
    }
    if (playerChoice == 'paper') {
        if (computerChoice == 'rock') return "Paper covers rock.  You win.";
        if (computerChoice == 'paper') return "Tie";
        if (computerChoice == 'scissors') return "Scissors cut paper.  I win.";
    }
    if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') return "Rock breaks scissors.  I win.";
        if (computerChoice == 'paper') return "Scissors cut paper. You win.";
        if (computerChoice == 'scissors') return "Tie";
    }
}

function game() {
  let playerGamesWon = 0;
  let computerGamesWon = 0;
  let numberOfTies = 0;
  for( i = 0; i < 5; i++) {
    playerChoice = prompt("Choose rock paper or scissors");
    computerChoice = getComputerChoice();
    winner = playRound(computerChoice, playerChoice);
    alert(winner);
    console.log(winner.slice(-6));

    if (winner.slice(-8) == 'You win.') playerGamesWon += 1;
    else if (winner.slice(-6) == 'I win.') computerGamesWon += 1;

  }
  // tally totals here

  let winstr;
  if (playerGamesWon == computerGamesWon) winstr = "Tie! No one has ";
  else if (playerGamesWon > computerGamesWon) winstr = "You have "
  else winstr = "Computer has"

  let message = `${winstr} won. Score: ${playerGamesWon} to ${computerGamesWon}`
  console.log(message)
  
} 

