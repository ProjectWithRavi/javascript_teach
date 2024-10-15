// console.log("hello");

/* ************************ data type

1. What are the different data types in JavaScript ?

2. What is the difference between null and undefined?
 Answer: undefined is a type itself and indicates that a variable has been declared but has not yet been assigned a value. null is an assignment value that represents the intentional absence of any object value.

3. what is use of typeof operator
Answer ; The typeof operator is used to check what type of data is being dealt with in JavaScript.

4. what will  output in this code  -->  let result = 5 + "5";


*/

/************************** variable 
//1. What are the three ways to declare a variable in JavaScript?

//2. What is the difference between let and const?

//3. Explain the concept of variable scope.
Answer: Variable scope refers to the accessibility of a variable within different parts of the code. In JavaScript, variables can have global scope, function scope, or block scope, depending on how they are declared.

//4. What happens if you try to use a variable that hasn’t been declared?

5. what will output in this code 


const myName = "John";
console.log(myName); // John
myName = "Doe";


Answer: Uncommenting this will throw a TypeError
when you declare a variable using const, JavaScript treats it as a constant (a "fixed type"), and when you try to reassign it, JavaScript throws a TypeError because that operation (reassignment) is not allowed for constants.

#####################Common Causes of a ReferenceError
1.Accessing an undeclared variable: If you try to use a variable that hasn’t been declared, you will get a ReferenceError.

console.log(x); // ReferenceError: x is not defined

2.Scope issues (using variables outside their defined scope): If you attempt to access a variable outside of the scope where it was declared, it results in a ReferenceError.


function test() {
  let y = 5;
}
console.log(y); // ReferenceError: y is not defined

3.Typos in variable names: Even a simple typo in a variable name can trigger a ReferenceError.

let name = "John";
console.log(nme); // ReferenceError: nme is not defined (typo in 'name')

4.Using a variable before it's declared: In JavaScript, variables declared with let and const are not hoisted like var, and attempting to access them before they are declared results in a ReferenceError.

console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;

5.
function myFunction() {
  console.log(a); // ReferenceError: a is not defined
}
myFunction();

*/

/*************************  dialogBox
1.What are the three main types of dialog boxes in JavaScript?

2.what will output in this code 

let a = alert("Welcome to our website!");
console.log(a);
*/

/* *************************** string method and properties 
1. Explain the purpose of the trim() method.

2. What is the length property of a string in JavaScript?

3. What is the difference between replace() and replaceAll()?

4. what will output in this code 
const original = "hello";
original.toUpperCase();
console.log(original);
*/

/* ************************* mathObject 
1. what is operator and operand in this code 
let a = 4+5

2. what will output in this code 
let b = 4*5/2
console.log(b)

*/

/* *************************** truthy and false value
1. List the falsy values in JavaScript.


*/

/* ************************* comparison operator 
1. What is the difference between == and === in JavaScript?


#######################Type Coercion Rules for ==:
1.Number and String: If one value is a string and the other is a number, JavaScript converts the string to a number.

Example:
console.log("5" == 5); // true (string "5" is converted to number 5)

2.Boolean and Other Types: If one value is a boolean, JavaScript converts the boolean to a number (true becomes 1, and false becomes 0).

Example:
console.log(true == 1);  // true (true is converted to 1)
console.log(false == 0); // true (false is converted to 0)

3.null and undefined: null and undefined are loosely equal to each other, but not to any other value.

Example:
console.log(null == undefined); // true
console.log(null == 0);         // false   //null can only be loosely equal to undefined. It is not equal to 0, false, or any other value.

console.log(undefined == 0);    // false

4.Special case: NaN:
NaN is not equal to anything, not even itself.

Example:
console.log(NaN == NaN); // false

2. what will output in this code 
console.log(5 == "5");
console.log(null == undefined);
console.log("10" > 5);

console.log("apple" > "banana");
Answer : In JavaScript, when you compare two strings using relational operators like >, <, >=, and <=, the comparison is done based on lexicographical order (essentially alphabetical order), but it follows the Unicode values of the characters.

Breakdown of "apple" > "banana":
JavaScript compares the strings character by character from left to right, based on their Unicode values.
The first character of "apple" is "a", and the first character of "banana" is also "b".
In Unicode, the character "a" has a lower value (Unicode value 97) than "b" (Unicode value 98).


console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(false == 0);

3. what will output in this code 
let a = "5";
let b = 5;
console.log(a != b);
console.log(a !== b);

*/

/* *************************** logical operator
1. what will output in this code 
console.log(false || 0 || "hello" || null);
console.log(10 && "JavaScript" && 0 && true);
console.log(!false && (5 > 3 || 10 < 5));


2. what will output in this code 
let isMember = true;
let hasDiscount = isMember || false;
console.log(hasDiscount);


*/

// const original = "hello";
// let a = original.toUpperCase();
// console.log(original);
// console.log(a);

// let isMember = true;
// let hasDiscount = isMember || false;
// console.log(hasDiscount);

let a = "true";
let b = "false";
console.log(a);
console.log(b);
