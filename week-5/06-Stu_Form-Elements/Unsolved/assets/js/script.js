var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

const handleSubmit = function (event) {
  event.preventDefault();
  //   console.log("click");
};

shoppingFormEl.on("submit", handleSubmit);
