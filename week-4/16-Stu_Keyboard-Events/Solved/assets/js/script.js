const keydownAction = function (event) {
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.keyCode;
  // TODO: Complete keydown function
};

const keyupAction = function () {
  document.querySelector("#status").innerHTML = "KEYUP Event";
};

document.addEventListener("keyup", keyupAction);

// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
