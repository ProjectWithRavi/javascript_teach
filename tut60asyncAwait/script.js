// *********** without using async await handle promise which return by api

// const response = fetch("https://jsonplaceholder.typicode.com/todos/1");
// response
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ********************8 if you add async keyword before a function then function return promise with fulfilled
// async function myFun(params) {}

// console.log(myFun());

// ******************* if you want send error by from you then use throw new Error() method
// async function myFun(params) {
//   throw new Error("this is error");
// }

// console.log(myFun());

// ****************** with async await , if you want use async await first make function and then use fetch method in this function ,its compulsory .

// async function myFun() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
// }

// myFun();

// **********************8 but async await always return fulfilled message , but if get any error then how handle , so then use try catch for handle error

// async function myFun(params) {
//   try {
//     throw new Error("this is error");
//   } catch (error) {
//     console.log(error);
//   }
// }

// console.log(myFun());

// **********************************************
// async function myFun() {
//   try {
//     const response = await fetch("https://jsonplaceholde.typicode.com/todos/1");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// myFun();
