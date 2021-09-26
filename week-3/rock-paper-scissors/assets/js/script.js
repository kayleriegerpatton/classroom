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

// game logic (pass in user and computer values; return win lose or draw)
const getGameResult = function () {
  return;
};

// calculate and log result
const calculateResult = function () {
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
} else {
  alert("Please enter a valid response using 'r,' 's,' or 'p.'");
}
