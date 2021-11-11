// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  const message2 = "How are you?";

  if (name.length > 0) {
    const message1 = "Hello " + name;
    console.log(message1);
  }

  console.log(message2);
};

addGreetingMessage("Tammy");

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  let callout = "Outside of the loop";
  let counter = 5;

  while (counter > 0) {
    let callout = "Inside the loop";
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (var i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    console.log(line);
    for (var i = 0; i < line.length; i++) {
      const element = line[i];
      console.log(element);
    }
  }
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
