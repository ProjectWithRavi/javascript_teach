// ****************************** check memory address

// const myName = "raman";
// const myName2 = "raman";

// const username1 = "";
// const username2 = "";

// const user1 = {
//   firstName: "Akash",
// };

// const user2 = {
//   firstName: "Akash",
// };

// when we compare primitive data type value then compare actually value ,but in non - primitive data case compare memory address not actually value

// *************************************object value access way
// const user = {
//   firstName: "ravi",
//   lastName: "sharma",
// };

// console.log(user.firstName); // dot notation
// console.log(user["lastName"]); // square notation

// ***************************** behind the scenes object key  as a string ,so not compulsory write in single or double quote

// const user = {
//   "firstName": "ravi",
//   "lastName": "sharma",
// };

// console.log(user);

// *****************************************
// const user = {
//   firstName: "ravi",
//   "last-Name": "sharma", //this case compulsory write key in double quote
// };

// console.log(user);
// console.log(user.last-Name);  //we can not write this
// console.log(user["last-Name"]);

//*******************************************************
// const city = "jaipur";

// const user = {
//   firstName: "ravi",
//   lastName: "sharma",
//   jaipur: "jodhpur",
// };

// console.log(user);
// console.log(user.jaipur);

// // if we want access by variable , because city are outer and we can not outer things access by dot notations
// console.log(user[city]);

//****************************************************** also we can write expression in square notation

// console.log(user["first" + "Name"]);

//***************************************************

// const user2 = {
//     firstName: 'ravi',
//     'last-Name': 'Sharma',
//     ram: 'Developer'
// }

// console.log(user2.firstName);
// console.log(user2["last-Name"]);
// console.log(user2[myName]);
// console.log(user2["first" + "Name"]);

// const user2 = {
//   firstName: "ravi",
//   lastName: "Sharma",
//   pata: {
//     city: "Bangalore",
//     pinCode: 876876,
//     state: "Karnataka",
//     moreDetails: {
//       population: 9798897897,
//       area: "787 sq km",
//     },
//   },
// };

// user2.age = 26
// user2["is-student"] = true

/* ********************************************* delete object key


*/

// var person = {
//   firstName: "shyam",
//   lastName: "sharma",
//   age: 50,
// };

// delete person.age; // or delete person["age"];

/********************* Object.seal() Vs Object.freeze() method in javascript ******************
1. Object.seal allows changes to existing properties but prevents adding or removing properties. Both 
2. Object.freeze() makes its properties immutable, meaning they cannot be added, removed, or modified

*/
// let username = "ravi";

// const user = {
//   firstName: "ram",
//   lastName: "sharma",
//   age: 15,
//   isGraduate: false,
// };

// // Object.seal(user)
// Object.freeze(user);

// console.log("isGraduate" in user);
