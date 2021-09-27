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

// game logic (return win lose or draw gameResult)
const getGameResult = function (userValue, computerValue) {
  return;
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

// Global variables
const playerDetails = {
  wins: 0,
  losses: 0,
  draws: 0,
};

let inProgress = true;

// Application
// get user value
const userValue = getUserValue();

// validate user value
const isValid = validateValue(userValue);

if (isValid) {
  //  get computer value
  const computerValue = getComputerValue();
  console.log(userValue, computerValue);
  //   display result and score
  //   displayScore(gameResult);
} else {
  alert("Please enter a valid response using 'r,' 's,' or 'p.'");
}
