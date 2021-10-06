// Assemble: Create/select DOM elements
var rootEl = $("#root");

const title = $(".text-center").text("Tic Tac Toe");

const boxOne = $("#item-a1");
const boxTwo = $("#item-b1");
const boxThree = $("item-c1").text("X");
const rowOne = $("#row1").append(boxOne, boxTwo, boxThree);

const boxFour = $("#item-a2").text("O");
const boxFive = $("#item-b2").text("X");
const boxSix = $("item-c2");
const rowTwo = $("#row2").append(boxFour, boxFive, boxSix);

const boxSeven = $("#item-a3");
const boxEight = $("#item-b3");
const boxNine = $("item-c3");
const rowThree = $("#row3").append(boxSeven, boxEight, boxNine);

rootEl.append(title, rowOne, rowTwo, rowThree);

// TODO: Starting from the root element, select all the boxes and turn them white in a single statement.
// HINT: Use the `.css` function to change element's background color
$("li").css({ "background-color": "#fff" });

// TODO: Starting from `rootEl`, what is the statement that will use "O" to block the "X" from winning
// HINT: Use the `.closest()`, or `.parent()` methods to go up the DOM tree
$(".item-a3").closest("li", rowThree).text("O");

// TODO: Starting from the bottom row, middle square or `.item-b3`, what is the statement that will win the game using "O"
// HINT: Use the ".closest()", or ".parent()" methods to go up the DOM tree
$(".item-a1").closest("li", rowOne).text("O");
