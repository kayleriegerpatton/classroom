var count = 0;

// target increment button
var incrementEl = document.querySelector("#increment");

// target decrement button
var decrementEl = document.querySelector("#decrement");

// target count text element
var countEl = document.querySelector("#count");

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", setCounterText);

// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", setCounterText);

// declare counter function
function setCounterText() {
  countEl.textContent = count;
}
