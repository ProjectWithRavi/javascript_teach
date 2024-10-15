// const fruitsCollection = ["Apple", "Banana", "Grapes", "Dates"];

// **************************************** if you want add in last
// fruitsCollection[4] = "orange";

//************************************* second way to add value in last
// fruitsCollection[fruitsCollection.length] = "orange";

//*********************************** third way to add value
// fruitsCollection.push("Pea");

//******************************* remove value from last
// fruitsCollection.pop();

// const fruitsCollection = ["Apple", "Banana", "Grapes", "Dates"];

// console.log(fruitsCollection);
// fruitsCollection.shift();
// console.log(fruitsCollection.shift());

// console.log(fruitsCollection);
// fruitsCollection.unshift("sunday");
// console.log(fruitsCollection.unshift("sunday"));

// const result = fruitsCollection.indexOf("Apple");
// console.log(result);

// const result2 = fruitsCollection.includes("apple");
// console.log(result2);

// const myarray = [1, 2, 3, 4, 5];
// let myresult = fruitsCollection.concat(myarray);
// console.log(myresult);

// console.log(fruitsCollection.join(" "));

/* *********************** reverse()
array.reverse() change original array
*/
// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// animals.reverse();
// console.log(animals);

/* **************************** sort()
1.array.sort() change original array

*/

// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "cow", "Tiger"];
// console.log(animals);
// animals.sort();
// console.log(animals);

//*** sort with small and capital value
// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "cow", "Tiger"];
// animals.sort();
// console.log(animals);

//**** sort with number , when we sort number, then he behaves differently , this code sort 1 and then 2
// const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24];
// console.log(evenNumbers);
// evenNumbers.sort();
// console.log(evenNumbers);

/* *********************************slice () *******************************
1.array.slice not change original array , give new array
2. when we need some part of the array then we use slice
*/
// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// console.log(animals);
// let newArray = animals.slice(2);
// console.log(animals);
// console.log(newArray);

// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// let newArray = animals.slice(2, 4);
// console.log(animals);
// console.log(newArray);

// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// let newArray = animals.slice();
// console.log(animals);
// console.log(newArray);

/***************************************** splice() *************************
1.The splice() method adds and/or removes array elements.
2.The splice() method overwrites the original array.

*/
// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// console.log(animals);
// animals.splice(2);
// console.log(animals);

// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// console.log(animals);
// animals.splice(2, 2);
// console.log(animals);

// remove one element on second index
// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// console.log(animals.splice(2, 1));
// console.log(animals);

//remove 2 element from second index
// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// console.log(animals.splice(2, 2));
// console.log(animals);

//remove element with add new
// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// console.log(animals);
// console.log(animals.splice(2, 0, "****"));
// console.log(animals);

// const animals = ["Dog", "Cat", "Rat", "Lion", "Elephant", "Cow", "Tiger"];
// console.log(animals.splice(2, 1, "****", "&&&&&&&&&&&"));
// console.log(animals);
