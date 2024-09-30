function animalAllowed(isHerbivore, weight, isPredator) {
  if ((isHerbivore || weight < 50) && !isPredator) {
    console.log("The animal is allowed in the open area");
  } else {
    console.log("The animal is NOT allowed in the open area");
  }
}
animalAllowed(true, 490, true);
function themeParkDiscount(age, isResident, hasMembership) {
  if (age < 12 || age > 64 || isResident || hasMembership) {
    console.log("The person qualifies for the discount");
  } else {
    console.log("This person does NOT qualify for the discount");
  }
}
themeParkDiscount(40, true, false);
