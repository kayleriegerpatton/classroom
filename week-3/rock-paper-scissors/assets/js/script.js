// get user value (r, s, or p)
const getUserValue = function () {
  const userValue = prompt("Choose rock (r), paper (p), or scissors (s).");
  return userValue.toLowerCase();
};

// validate user choice true/false
const validateValue = function (userValue) {
  return userValue === "r" || userValue === "s" || userValue === "p";
};

// get computer's choice (r, s, or p)
const getComputerValue = function () {
  // declare values array
  const validValues = ["r", "s", "p"];
  // generate random index integer
  const randomIndex = Math.floor(Math.random() * validValues.length);
  // use integer to access random array value
  const randomValue = validValues[randomIndex];
  return randomValue;
};

// game logic
const getGameResult = function (userValue, computerValue) {
  if (userValue === computerValue) {
    const gameResult = "draw";
  } else if (
    (userValue === "r" && computerValue === "s") ||
    (userValue === "s" && computerValue === "p") ||
    (userValue === "p" && computerValue === "r")
  ) {
    const gameResult = "win";
  } else {
    const gameResult = "lose";
  }
  return gameResult;
};

// calculate and log result
const displayScore = function (gameResult) {
  if (gameResult === "win") {
    playerDetails.wins += 1;
  } else if (gameResult === "lose") {
    playerDetails.losses += 1;
  } else {
    playerDetails.draws += 1;
  }

  // scoreboard message content
  const scoreMessage =
    "Wins: " +
    playerDetails.wins +
    " | Losses: " +
    playerDetails.losses +
    " | Draws: " +
    playerDetails.draws;

  alert(scoreMessage);
  return;
};

// confirm if user wants to play again
const playAgain = function () {
  const playAgainResponse = confirm("Want to play again?");
  return playAgainResponse;
};

// Global variables
const playerDetails = {
  wins: 0,
  losses: 0,
  draws: 0,
};

let inProgress = true;

// Application
// get user value
while ((inProgress = true)) {
  const userValue = getUserValue();

  // validate user value
  const isValid = validateValue(userValue);

  if (isValid) {
    //  get computer value
    const computerValue = getComputerValue();
    console.log(userValue, computerValue);

    //   calculate and display result
    const gameResult = getGameResult();
    console.log(gameResult);
    displayScore(gameResult);

    // confirm play again response
    const playAgainResponse = playAgain();
    if (playAgainResponse) {
      continue;
    } else {
      let inProgress = false;
    }
  } else {
    alert("Please enter a valid response using 'r,' 's,' or 'p.'");
  }
}
