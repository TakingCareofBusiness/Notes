function animalAllowed(is_herbivore, weight, is_predator) {
  if ((is_herbivore || weight < 50) && !is_predator) {
    console.log("The animal is allowed in the open area");
  } else {
    console.log("The animal is NOT allowed in the open area");
  }
}
animalAllowed(true, 490, true);
