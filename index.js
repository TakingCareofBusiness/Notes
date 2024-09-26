function evenOrOdd(inputnumber) {
  if (inputnumber % 2 > 0) {
    console.log("odd number");
  } else if (inputnumber % 2 === 0) {
    console.log("even number");
  }
}
function largerNumber(firstnumber, secondnumber) {
  if (firstnumber > secondnumber) {
    console.log(firstnumber, "is larger");
  } else if (secondnumber > firstnumber) {
    console.log(secondnumber, "is larger");
  }
}
evenOrOdd(6);
largerNumber(11, 5);
