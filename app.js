let userScore = 0;                 // User score tracker
let compScore = 0;                 // Computer score tracker

const choices = document.querySelectorAll(".choice"); // All choice buttons (rock/paper/scissors)
const msg = document.querySelector("#msg");           // Message display element

const userScorePara = document.querySelector("#user-score"); // User score element
const compScorePara = document.querySelector("#comp-score"); // Computer score element

const genCompChoice = () => {                         // Generate computer's choice
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);      // Pick random index 0-2
  return options[randIdx];                            // Return rock/paper/scissors
};

const drawGame = () => {                              // Handle draw round
  msg.innerText = "Game was draw. Play Again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => { // Handle win or lose
  if (userWin) {
    userScore++;                                      // Increase user score
    userScorePara.innerText = userScore;              // Update user score on screen
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; // Win message
    msg.style.backgroundColor = "green";              // Green = win
  } else {
    compScore++;                                      // Increase computer score
    compScorePara.innerText = compScore;              // Update computer score
    msg.innerText = `You lost! ${compChoice} beats Your ${userChoice}`; // Lose message
    msg.style.backgroundColor = "red";                // Red = lose
  }
};

const playGame = (userChoice) => {                    // Main game logic
  const compChoice = genCompChoice();                 // Get computer choice

  if (userChoice === compChoice) {
    drawGame();                                       // If same choice → draw
  } else {
    let userWin = true;                               // Assume user wins

    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true; // Rock loses to paper
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true; // Paper loses to scissors
    } else {
      userWin = compChoice === "rock" ? false : true; // Scissors loses to rock
    }

    showWinner(userWin, userChoice, compChoice);      // Show result
  }
};

choices.forEach((choice) => {                         // Add click event to each choice
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");     // Get user's choice id
    playGame(userChoice);                             // Play one round
  });
});
