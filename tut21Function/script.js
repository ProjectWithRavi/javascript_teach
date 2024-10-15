// ******************************* Syntax of function
function name(params) {}

// ******************************************** without using function
// console.log("hello everyOne");
// console.log("my name is ravi");
// console.log("i am from jaipur");

// console.log("hello everyOne");
// console.log("my name is ravi");
// console.log("i am from jaipur");

// console.log("hello everyOne");
// console.log("my name is ravi");
// console.log("i am from jaipur");

// console.log("hello everyOne");
// console.log("my name is ravi");
// console.log("i am from jaipur");

// ************************************* with using function , but this code same every time mean static code
// function introdceMe() {
//   console.log("hello everyOne");
//   console.log("my name is ravi");
//   console.log("i am from jaipur");
// }

// introdceMe();
// introdceMe();
// introdceMe();

// ******************************************* parameter and argument

// function introdceMe(name) {
//   console.log("hello everyOne");
//   console.log(`my name is ${name}`);
//   console.log("i am from jaipur");
// }
// introdceMe("ravi");
// introdceMe("ram");
// introdceMe("rajesh");

// ******************************************* default value
// function introdceMe(name='harish) {
//   console.log("hello everyOne");
//   console.log(`my name is ${name}`);
//   console.log("i am from jaipur");
// }
// introdceMe("ravi");
// introdceMe();
// introdceMe("rajesh");

// *********************************************************

// Function Definition
// function introduceMe(username, profession, age) {
//   // console.log(typeof username);
//   // console.log(typeof profession);
//   // console.log(typeof age);
//   console.log("Hi,");
//   console.log(`My name is ${username || "ram"}.`);
//   console.log(`I am a ${profession}`);
//   console.log(`I am ${age} years old.`);
// }

// //                  Function Call
// const returnValue = introduceMe()

// introduceMe('ram', 'Software Engineer', 25)
// introduceMe('Akash', 'Mechanical Engineer', 27)

// *****************************************************************************************************
// There are three ways of writing a function in JavaScript:

//1. Function Declaration: It declares a function with a function keyword. The function declaration must have a function name.

// function geeksforGeeks(paramA, paramB) {
//     // Set of statements
// }

//2. Function Expression
// It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment.
// let geeksforGeeks= function(paramA, paramB) {
//     // Set of statements
// }

// 3Arrow Function:
// Arrow Function is one of the most used and efficient methods to create a function in JavaScript because of its comparatively easy implementation. It is a simplified as well as a more compact version of a regular or normal function expression or syntax.

// let function_name = (argument1, argument2 ,..) => expression

// ********************************************* return statement
// function myfun(a, b) {
//   return a + b;
// }

// let result = myfun(10, 20);
// console.log(result);

// // ****** pass function

// let result2 = myfun(myfun(10, 20), myfun(30, 50));
// console.log(result2);

// const myarrow = () => {
//   console.log("hello");
// };

// function sum(a, b) {
//   //   console.log(a + b);
//   let total = a + b;
//   let sub = a - b;
//   return total, sub;
// }

// const newvalue = sum(1, 2);
// console.log(newvalue);
