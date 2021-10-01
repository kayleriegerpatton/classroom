var count = 0;

// target increment button
var incrementEl = document.querySelector("#increment");

// target decrement button
var decrementEl = document.querySelector("#decrement");

// target count text element
var countEl = document.querySelector("#count");

// declare counter function
function setCounterText() {
  countEl.textContent = count;
}

const incrementValue = function () {
  setCounterText(++count);
};

const decrementValue = function () {
  return;
};

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", incrementValue);

// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", decrementValue);
