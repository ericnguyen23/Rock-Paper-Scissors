// set vars to keep score
var userScore = 0;
var compScore = 0;
var tieScore = 0;

// set vars to keep track of selection
var userSelection = "";
var compSelection = "";

// create play game function so we can call it again to play again
function playGame() {
  // User selects
  var userSelection = prompt("Make your selection: P, R or S").toUpperCase();
  // Set array for computer to select
  var options = ["P", "R", "S"];
  // Computer to select
  // Randomly select 0, 1, 2
  var randomSelect = Math.floor(Math.random() * 3);
  var compSelection = options[randomSelect];

  // Check who wins, lose, or tie
  if (
    (userSelection == "P" && compSelection == "R") ||
    (userSelection == "R" && compSelection == "S") ||
    (userSelection == "S" && compSelection == "P")
  ) {
    alert("Computer played: " + compSelection + " so you win!");
    userScore++;
    confirm(
      "User: " + userScore + "\nComputer: " + compScore + "\nTie: " + tieScore
    );
    playAgain();
  } else if (
    (compSelection == "P" && userSelection == "R") ||
    (compSelection == "R" && userSelection == "S") ||
    (compSelection == "S" && userSelection == "P")
  ) {
    alert("Computer played: " + compSelection + " so computer wins!");
    compScore++;
    confirm(
      "User: " + userScore + "\nComputer: " + compScore + "\nTie: " + tieScore
    );
    playAgain();
  } else {
    alert("Computer played: " + compSelection + " so it's a tie!");
    tieScore++;
    confirm(
      "User: " + userScore + "\nComputer: " + compScore + "\nTie: " + tieScore
    );
    playAgain();
  }
}

// play again function
function playAgain() {
  if (window.confirm("Play again?")) {
    playGame();
  }
}

// start the game
playGame();
