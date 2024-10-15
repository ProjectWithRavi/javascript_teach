// const MyColors = ["red", "green", "yellow", "pink", "black", "white"];
//
// const color1 = MyColors[0];
// const color2 = MyColors[1];
// const color3 = MyColors[2];

// console.log(color1);
// console.log(color2);
// console.log(color3);

// ************************************  destructuring with array

// const MyColors = ["red", "green", "yellow", "pink", "black", "white"];

// const [color1, color2, color3, , color5] = MyColors;

// console.log(color1);
// console.log(color2);
// console.log(color3);
// console.log(color5);

// ***************************************

// const MyColors = ["red", "green", "yellow", "pink", "black", "white"];

// const [, , , , color5] = MyColors;

// console.log(color5);

// ************************************* destructuring with object *************************************

// *********** without using destructuring
// const Myuser = {
//   name: "Ravi",
//   age: 25,
// };

// const myName = Myuser.name;
// const myage = Myuser.age;
// console.log(myName);
// console.log(myage);

// *********** with using destructuring
// const Myuser = {
//   name: "Ravi",
//   age: 20,
// };

// const { name, age } = Myuser;
// console.log(name);
// console.log(age);

// ************ change destructuring object key name
// const Myuser = {
//   name: "Ravi",
//   age: 20,
// };

// const { name: myName, age: myAge } = Myuser;
// console.log(myName);
// console.log(myAge);

// ************ multilevel destructuring
// const Myuser = {
//   name: "Ravi",
//   age: 20,
//   address: {
//     city: "jaipur",
//     state: "rajasthan",
//   },
// };

// const {
//   address: { city },
// } = Myuser;
// console.log(city);

// ***************** destructuring array like object
// const Mycolors = ["red", "green", "yellow", "pink", "black", "white"];

// const { 3: thirdColor } = Mycolors;
// console.log(thirdColor);

// ****************************************** destructuring with function ****************************
// const Myuser = {
//   name: "Ravi",
//   age: 20,
// };

// function myfun({ name, age }) {
//   console.log(name, age);
// }

// myfun(Myuser);

// const myColors = ["red", "green", "yellow", "pink", "black", "white"];

// function myfun([firstColor, secondColor, , fourColor]) {
//   console.log(firstColor, secondColor, fourColor);
// }

// myfun(myColors);
