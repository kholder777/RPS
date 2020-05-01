// Create variables wins, loss, ties
let wins = 0;
let loss = 0;
let ties = 0;
let = "true"
let userChoice = "True";
let computerChoice = "";
const rps = ["r", "p", "s"];

userChoice = confirm("Would you like to play rock, paper, scissors");
if (userChoice) {

} else(cancelGame);

for (var i = 0; i < 6; i++) {

    computerChoice = rps[Math.floor(Math.random() * 3)];
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