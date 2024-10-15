// ****************************************************

// const username1 = "ravi";
// let username2 = username1;
// username2 = "ram";
// console.log(username1);
// console.log(username2);

// *****************************************************
// const fruits = ["Mango", "Apple", "Orange"];

// const myFruits = fruits;

// myFruits.push("Dates");
// myFruits.push("Grapes");
// console.log(fruits);
// console.log(myFruits);

// const user1 = {
//   firstName: "ravi",
//   lastName: "sharma",
// };

// const user2 = user1;
// user2.lastName = "verma";
// console.log(user1);
// console.log(user2);

// ********************************** solution for create copy , this is old way use in 2015 and 2016
// const fruits = ["Mango", "Apple", "Orange"];
// const myFruits = [];

// Object.assign(myFruits, fruits);

// myFruits.push("ram");
// console.log(fruits);
// console.log(myFruits);

// ***************************** second way , spread operator
// const fruits = ["Mango", "Apple", "Orange"];
// const myFruits = [...fruits];
// console.log(fruits);
// console.log(myFruits);

// ************************ third way for create copy
// const fruits = ["Mango", "Apple", "Orange"];
// const myFruits = [].concat(fruits)
// console.log(fruits)
// console.log(myFruits)

// ************************ fourth way for create copy
// const fruits = ["Mango", "Apple", "Orange"];
// const myFruits = fruits.slice()
// console.log(fruits)
// console.log(myFruits)

// *************************** Misbehaviour when create copy

// const user1 = {
//   firstName: "ravi",
//   lastName: "sharma",
//   pata: {
//     city: "Delhi",
//     pincode: 989888,
//   },
//   subject: ["Physics", "CS", "Maths"],
// };

// const user2 = {};
// Object.assign(user2, user1);
// user2.pata.city = "jaipur";
// console.log(user1);
// console.log(user2);

// Shallow Copy

// const user1 = {
//   firstName: "ravi",
//   lastName: "sharma",
//   pata: {
//     city: "Delhi",
//     pincode: 989888,
//   },
//   subject: ["Physics", "CS", "Maths"],
// };
// const user2 = { ...user1 };
// user2.pata.city = "jaipur";
// console.log(user1);
// console.log(user2);
