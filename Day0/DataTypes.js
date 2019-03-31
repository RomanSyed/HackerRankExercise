function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;
  secondInteger = parseInt(secondInteger);
  let sumInt = secondInteger + firstInteger;
  console.log(sumInt);
  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  secondDecimal = parseFloat(secondDecimal);
  let sumDec = secondDecimal + firstDecimal;
  console.log(sumDec);
  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";

  console.log(firstString + secondString);
}
performOperation(12, 4.32, "is the best place to learn and practice coding!");
