// Write Your Code Below
// Function declaration
const equality = function (val1, val2) {
  if (val1 === val2) {
    console.log("They are equal in type and value");
  } else if (val1 == val2) {
    console.log("They are equal in value");
  } else {
    console.log("The values are not equal");
  }
};

// Tests:

// === Strictly equal
equality(2, 2);

// == Equal in value
equality(4, "4");

// !== Not equal
equality(4, -8);
