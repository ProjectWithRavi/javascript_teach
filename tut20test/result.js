// Theoretical Questions
/*1. What are the primitive data types in JavaScript? List them.
Answer: JavaScript has the following primitive data types:

String: Represents textual data.
Number: Represents both integer and floating-point numbers.
Boolean: Represents logical entities (true or false).
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any object value.
Symbol (ES6): Represents a unique and immutable identifier.
BigInt (ES2020): Represents whole numbers larger than 2^53 - 1.

*/

/* ************************** Q2. Explain the difference between let, const, and var in JavaScript.
Answer:

var:
Scope: Function-scoped or globally scoped if declared outside a function.
Hoisting: Hoisted and initialized with undefined.
Re-declaration: Can be re-declared and updated.
let:
Scope: Block-scoped.
Hoisting: Hoisted but not initialized (Temporal Dead Zone).
Re-declaration: Cannot be re-declared in the same scope but can be updated.
const:
Scope: Block-scoped.
Hoisting: Hoisted but not initialized (Temporal Dead Zone).
Re-declaration: Cannot be re-declared or updated. Must be initialized at the time of declaration. However, for objects and arrays, their properties/elements can be modified.

*/

/* ******************************************** Q3. What are truthy and falsy values in JavaScript? Provide three examples of each.
Answer:

Truthy Values: Values that evaluate to true in a Boolean context.
Examples:
Non-zero numbers (e.g., 1, -100)
Non-empty strings (e.g., "Hello")
Objects (e.g., {}, [])
Falsy Values: Values that evaluate to false in a Boolean context.
Examples:
false
0
"" (empty string)
null
undefined
NaN


*/

/* ************************************** Q4.Differentiate between == and === operators in JavaScript.
Answer:

== (Equality Operator):
Compares two values for equality after performing type coercion if necessary.
Example:
javascript
Copy code
5 == '5'; // true
=== (Strict Equality Operator):
Compares both value and type without performing type coercion.
Example:
javascript
Copy code
5 === '5'; // false

*/

/* ***************************************** Q5. What is the ternary operator in JavaScript? Provide its syntax.
Answer: The ternary operator is a shorthand for if-else statements. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

Syntax:

javascript
Copy code
condition ? expressionIfTrue : expressionIfFalse
Example:

javascript
Copy code
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // "Yes"


*/

/*********************************** Q7. What is the difference between for...in and for...of loops in JavaScript?
Answer:

for...in:
Iterates over the enumerable properties of an object (including inherited properties).
Primarily used for objects.
Example:
javascript
Copy code
const obj = {a: 1, b: 2};
for (let key in obj) {
  console.log(key); // "a", "b"
}
for...of:
Iterates over iterable objects (like arrays, strings, Maps, Sets).
Accesses the values of the iterable.
Example:
javascript
Copy code
const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value); // 10, 20, 30
}

*/

/**************************************** Q8. Compare if-else statements with switch statements. When is it appropriate to use each?
Answer:

if-else Statements:
Used for executing code blocks based on conditions.
Suitable for complex conditions or when multiple different expressions need to be evaluated.
Example:
javascript
Copy code
if (x > 10) {
  // ...
} else if (x > 5) {
  // ...
} else {
  // ...
}
switch Statements:
Used for executing different blocks of code based on the value of a single expression.
Cleaner and more readable when dealing with multiple discrete values of the same variable.
Example:
javascript
Copy code
switch (day) {
  case 'Monday':
    // ...
    break;
  case 'Tuesday':
    // ...
    break;
  default:
    // ...
}
When to Use:

Use if-else for complex or range-based conditions.
Use switch when checking a single variable against multiple specific values.

*/

// Practical (Coding) Questions
/* **************************************** Q1. Declare a variable using let and assign it a string value. Then, change its value to a number.
Answer:


let myVar = "Hello";
console.log(myVar); // Output: "Hello"

myVar = 42;
console.log(myVar); // Output: 42

*/

/***************************************** Q2. Create a dialog box that asks the user for their favorite color and then alerts a message with their input.


Answer:
// Prompt box: Asks for user input
let favoriteColor = prompt("What is your favorite color?");

// Alert box: Displays a message with the user's input
alert("Your favorite color is " + favoriteColor + "!");

*/

/**************************************** Q3. Given the string "JavaScript", use a string method to convert it to uppercase and log the result.

Answer:
let str = "JavaScript";
let upperStr = str.toUpperCase();
console.log(upperStr); // Output: "JAVASCRIPT"
*/

/* ************************************ Q4. Check if the value 0 is truthy or falsy and log the result.

Answer:
let value = 0;
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // This will be logged
}

*/

/* ******************************** Q5. Compare two variables a and b using both == and === operators and log the results. Assume a = '5' and b = 5.

Answer:
let a = '5';
let b = 5;

console.log(a == b);  // Output: true (type coercion happens)
console.log(a === b); // Output: false (different types)

*/

/* ********************************** Q6. Use logical operators to check if a number x is between 10 and 20 (inclusive) and log an appropriate message.

Answer:
javascript
Copy code
let x = 15;

if (x >= 10 && x <= 20) {
  console.log("x is between 10 and 20.");
} else {
  console.log("x is not between 10 and 20.");
}
// Output: "x is between 10 and 20."

*/

/* ************************************** Q7. Write a ternary operation to assign the value "Even" or "Odd" to a variable based on whether a number is even or odd. Use the number 7 as an example.

Answer:
let number = 7;
let type = (number % 2 === 0) ? "Even" : "Odd";

console.log(type); // Output: "Odd"

*/

/* ********************************** Q8. Create an object representing a smartphone with properties: brand, model, and price. Then, log the model of the smartphone.

Answer:
const smartphone = {
  brand: "Apple",
  model: "iPhone 14",
  price: 999
};

console.log(smartphone.model); // Output: "iPhone 14"

*/

/*9. Initialize an array with the numbers [10, 20, 30, 40, 50]. Use a for loop to log each number to the console.

Answer:
const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Output:
// 10
// 20
// 30
// 40
// 50

*/

/* ********************************** Q10. Use the spread operator to combine the following two arrays into one: arr1 = [1, 2, 3] and arr2 = [4, 5, 6]. Log the combined array.

Answer:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

*/

/* ****************************** Q11. Given the array fruits = ['apple', 'banana', 'cherry'], use a for...of loop to log each fruit in uppercase.

Answer:
const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}

// Output:
// APPLE
// BANANA
// CHERRY

*/

/* ***************************** Q12. Use a switch statement to log different messages based on the value of the variable day. Handle at least three days and a default case.

Answer:
let day = 'Wednesday';

switch (day) {
  case 'Monday':
    console.log("Start of the work week.");
    break;
  case 'Wednesday':
    console.log("Midweek day.");
    break;
  case 'Friday':
    console.log("End of the work week.");
    break;
  default:
    console.log("It's a regular day.");
}

// Output: "Midweek day."

*/

/* ****************************** Q13. Create an array of objects representing three cars. Each object should have properties make, model, and year. Then, use a loop to log the make and model of each car.

Answer:
const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 }
];

for (let i = 0; i < cars.length; i++) {
  console.log(`${cars[i].make} ${cars[i].model}`);
}

// Output:
// Toyota Camry
// Honda Civic
// Ford Mustang

*/

/* ***************************** Q14. Use a for loop to calculate and log the sum of all numbers in the array [5, 10, 15, 20].

Answer:
const numbers = [5, 10, 15, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Sum:", sum); // Output: "Sum: 50"

*/

/* ************************************ Q15. Given the string "Hello World", use a string method to extract the substring "World" and log it.

Answer:
let str = "Hello World";
let substring = str.substring(6, 11); // or str.slice(6)

console.log(substring); // Output: "World"


*/

/*16. Create an array [2, 4, 6, 8, 10] and use the spread operator to add the number 12 at the end. Log the new array.

Answer:
const originalArray = [2, 4, 6, 8, 10];
const newArray = [...originalArray, 12];



console.log(newArray); // Output: [2, 4, 6, 8, 10, 12]
*/

/* ******************************* Q17. Use the confirm dialog to ask the user if they like coffee. Log "User likes coffee." if they confirm, or "User does not like coffee." if they cancel.

Answer:
// Confirm box: Asks for user confirmation
let likesCoffee = confirm("Do you like coffee?");

if (likesCoffee) {
  console.log("User likes coffee.");
} else {
  console.log("User does not like coffee.");
}
Note: The output will depend on the user's response.

*/

/* ***********************************8 Q18. Initialize a variable score with a value of 85. Use an if-else statement to log "Pass" if the score is 60 or above, otherwise log "Fail".
Answer:

javascript
Copy code
let score = 85;

if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// Output: "Pass"

*/

/* *************************************** Q19. Given the array numbers = [1, 3, 5, 7, 9], use a loop to create a new array where each number is multiplied by 2. Log the new array.

Answer:
const numbers = [1, 3, 5, 7, 9];
let doubled = [];

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

console.log(doubled); // Output: [2, 6, 10, 14, 18]

*/

/* ********************************** Q20. Create a dialog sequence where an alert welcomes the user, a prompt asks for their name, and a confirm asks if they want to proceed. Log all the collected information.

Answer:
// Alert box: Welcome message
alert("Welcome to the JavaScript Test!");

// Prompt box: Ask for user's name
let userName = prompt("Please enter your name:");

// Confirm box: Ask if they want to proceed
let proceed = confirm("Do you want to proceed with the test?");

console.log(`Name: ${userName}`);
console.log(`Wants to proceed: ${proceed}`);

// Example Output (depending on user input):
// Name: John
// Wants to proceed: true

*/
