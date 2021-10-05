var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on("submit", function (event) {
  event.preventDefault();
  const shoppingListItem = $("<li>");
  const inputItem = $("#shopping-input");

  shoppingListItem.text(inputItem.val());
  shoppingListEl.append(shoppingListItem);
});
