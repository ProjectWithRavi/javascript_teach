// function add(a, b) {
//   return a + b;
// }

// add(1,2)

// **********************88 when not give any argument and console.log parameter
// function add(a, b) {
//   console.log(a, b);
// }

// add();

// ***************************************** default parament
// function add(a, b = 1) {
//   console.log(a, b);
// }

// add(2);

// *********************************** give undefined in argument with default parameter , then overRight undefined by default parameter , this run only undefined case
// function add(a, b = 1) {
//   console.log(a, b);
// }

// add(2, undefined);

// **************************** null is falsy value then convert to zero

// function add(a, b = 1) {
//   console.log(a * b);
// }

// add(2, null);

function multiply(a, b = 1) {
  return a * b;
}

function rollADie(numberOfSides = 6) {
  return Math.floor(Math.random() * numberOfSides) + 1;
}
