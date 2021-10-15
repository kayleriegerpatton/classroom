var shoppingFormEl = $("#shopping-form");
var shoppingListEl = $("#shopping-list");

var shoppingListItemEl = $(
  '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
);

function handleFormSubmit(event) {
  event.preventDefault();

  var shoppingItem = $('input[name="shopping-input"]').val();

  if (!shoppingItem) {
    console.log("No shopping item filled out in form!");
    return;
  }
  var shoppingListItemEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  shoppingListItemEl.text(shoppingItem);
  // add delete button to remove shopping list item
  const removeBtn = $(
    '<button class="btn btn-danger btn-small delete-item-btn">Remove</button>'
  );
  shoppingListItemEl.append(removeBtn);

  // print to the page
  shoppingListEl.append(shoppingListItemEl);

  // clear the form input element
  $('input[name="shopping-input"]').val("");
}

// TODO: Create a function to handle removing a list item when `.delete-item-btn` is clicked

function removeItem(event) {
  event.preventDefault();
  shoppingListItemEl.remove();
}

// TODO: Use event delegation and add an event listener to `shoppingListEl` to listen for a click event on any element with a class of `.delete-item-btn` and execute the function created above

shoppingFormEl.on("submit", handleFormSubmit);
$("#shopping-list-item").


(".delete-item-btn").on("click", removeItem);
