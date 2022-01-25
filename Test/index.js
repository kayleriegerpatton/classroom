const numbers = [5, 8, 12, 19, 22];

function sumTwoSmallestNumbers(numbers) {
  // sort array in ascending order
  const orderedNumbers = numbers.sort((a, b) => a - b);

  //   pull out first two numbers
  const twoNumbers = orderedNumbers.slice(0, 1);

  //   add two numbers
  const reducer = (valueOne, valueTwo) => valueOne + valueTwo;
  return twoNumbers.reduce(reducer);
}

sumTwoSmallestNumbers();
