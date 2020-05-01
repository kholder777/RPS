// Create variables wins, loss, ties
let wins = 0;
let loss = 0;
let ties = 0;
let userRPSChoice;
let userChoice = "True";
let computerChoice = "";
const rps = ["r", "p", "s"];
let total = ["Wins: " + wins, "Losses: " + loss, "ties: " + ties];

// - Create a button on the HTML page that invokes the playGame function
// - Create a function named playGame function that will take in users input as an argument and runs the necessary functions below in the proper order (hint, the order they're listed in is NOT the proper order).
// - Create a function that will take in the wins, losses, & ties as an argument and print out the states using an alert. **THE STATS MUST BE AN OBJECT**
// - Create a function that randomly selects a computers choice AND returns that value.
// - Create a function to validate who the winner of a round is. It should take in the users selection & the computers selection

function playGame() {
  userChoice = confirm("Would you like to play rock, paper, scissors");
  if (userChoice) {
    userRPSChoice = prompt("Pick R for Rock, P for Paper, S for Scissors");

    for (var i = 0; i < 6; i++) {
      computerChoice = rps[Math.floor(Math.random() * 3)];
      if (
        userRPSChoice != "r" ||
        userRPSChoice != "p" ||
        userRPSChoice != "s"
      ) {
        userRPSChoice = prompt("Pick R for Rock, P for Paper, S for Scissors");
      } else {
        alert("test");
      }
    }
  } else {
    alert("You should've played");
  }
}

// Prompt user to choose rock, paper, or scissors
// Randomly choose r,p, or s for computer
// If user choice equals computer choice then tie  +=1
// If user chose r and computer chose p or
// If user chose p and computer chose s or
// If user chose s and computer chose r  or
// Then loss +=1
// Else user wins +=1
// Output wins, losses, and ties
