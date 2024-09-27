function animalAllowed(is_herbivore, weight, is_predator) {
  if ((is_herbivore === true || weight < 50) && !(is_predator === true)) {
    if (is_predator === false)
      console.log("The animal is allowed in the open area");
  } else {
    console.log("The animal is NOT allowed in the open area");
  }
}
animalAllowed(true, 100, false);
