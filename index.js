//console.log("connected");\basically prints in inspect window
//variables
//dont do this!
var x = 45;

//yes do this
//let when we want variables that can be redefined
let y = 45;
y = 34;
let a; //creates variable that you can define later
//const YES DO THIS, cannot be redefined, use const 99% of time
const z = 45;

//Data Types, primitive data types
//let string = "Kyle";
//let integer = 45; //number
//let bool = true; //true or false
//let nulls = null; //null is absence of value
//let undefine = undefined; //no value
//x ,y are arguments
function add(x, y) {
  //not magic, return turns add into a variable, have to transfer it to a variable
  return x + y;
  //cannot write after return statement
}
//call functions
const result = add(z, 65);
console.log(result);

//conditional statements
let b = 7;
if (b > 0) {
  console.log("positive number");
} else if (b < 0) {
  console.log("negative number");
} else if (b === 0) {
  console.log("equals zero");
} else {
  console.log("not a number");
}
