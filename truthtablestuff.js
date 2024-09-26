function animalAllowed(is_herbivore, weight, is_predator) {
  if (is_herbivore === true && weight < 50) {
    firstRule === true;
  } else {
    firstRule === false;
  }
  if (is_predator === true) {
    secondRule === true;
  } else {
    secondRule === false;
  }
  if (firstRule === true && secondRule === true) {
    console.log("The animal is allowed in the open area");
  } else {
    console.log("The animal is NOT allowed in the open area");
  }
}
animalAllowed(true, 30, true);
