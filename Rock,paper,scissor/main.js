//get score from the local storage
let score = JSON.parse(localStorage.getItem("score"));

// give a value to a local storage that has been reset so it doesnt give a null value
if (!score) {
  score = {
    win: 0,
    losses: 0,
    tie: 0,
  };
}

//generating a computer move using math random that has 3 division
function getComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  //Getting random number pick by computer then returning it
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

//get the player move and compare it using if statement om computer move
function getPlayerMove(playerMove) {
  const computerMove = getComputerMove();
  let gameResult = "";
  //Used for comparing
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      gameResult = "You lose!";
    } else if (computerMove === "paper") {
      gameResult = "You Win!";
    } else if (computerMove === "scissors") {
      gameResult = "Tie!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      gameResult = "You Win!";
    } else if (computerMove === "paper") {
      gameResult = "Tie!";
    } else if (computerMove === "scissors") {
      gameResult = "You lose!";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      gameResult = "Tie!";
    } else if (computerMove === "paper") {
      gameResult = "You lose!";
    } else if (computerMove === "scissors") {
      gameResult = "You Win!";
    }
  }

  //get score
  if (gameResult === "You Win!") {
    score.win += 1;
  } else if (gameResult === "You lose!") {
    score.losses += 1;
  } else if (gameResult === "Tie!") {
    score.tie += 1;
  }

  //set local storage
  localStorage.setItem("score", JSON.stringify(score));
  updateScore(playerMove, computerMove);
}

updateScore();
removeResult()


// update the score in the DOM
function updateScore(playerMove, computerMove) {
  displayResult(playerMove,computerMove);
  const myScore = document.querySelector("#js-score");
  myScore.innerHTML = `Wins ${score.win}. Losses ${score.losses}. Ties ${score.tie}`;
  
}
function displayResult(playerMove, computerMove) {
  // Update the result in the DOM
  const myResult = document.querySelector("#js-result");
  myResult.innerHTML = `You picked ${playerMove} - Computer picked ${computerMove}.`;
}

// resetting a score
var reset = document.getElementById("resetScore");
reset.onclick = function () {
  score.win = 0;
  score.losses = 0;
  score.tie = 0;

  // removing item from local storage
  localStorage.removeItem("score");

  updateScore();

  // used to remove the result when the reset button is clicked
  const myResult = document.querySelector("#js-result");
  myResult.innerHTML = "";
};

// removing the result when browser is refreshed
function removeResult() {
  const myScore = document.querySelector("#js-score");
  myScore.innerHTML = `Wins ${score.win}. Losses ${score.losses}. Ties ${score.tie}`;
  const myResult = document.querySelector("#js-result");
  myResult.innerHTML = "";
};
