// ************ syntax of promise and promise take one callback function
// const myPromise = new Promise(() => {});
// console.log(myPromise);

// ********************* callback take two argument resolve ,reject
// const myPromise = new Promise((resolve, reject) => {
//   resolve("hello");
// });
// console.log(myPromise);

// const myPromise = new Promise((resolve, reject) => {
//   reject("this is reject");
// });
// console.log(myPromise);

// ************************ when you want get resolve and reject value then use .then() and .catch() method
// const myPromise = new Promise((resolve, reject) => {
//   reject("this is reject");
// });
// myPromise.then((data) => {
//   console.log(data);
// });
// myPromise.catch((data) => {
//   console.log(data);
// });

// *************************************8
// const myPromise = new Promise((resolve, reject) => {
//   resolve("this is resolve");
// });
// myPromise
//   .then((data) => {
//     console.log(data);
//     return data + " ravi";
//   })
//   .then((data) => {
//     console.log(data);
//   });

// ****************************************
// const myPromise = new Promise((resolve, reject) => {
//   reject("hello");
// });
// myPromise
//   .then((data) => {
//     console.log(data + " resolve");
//   })
//   .catch((data) => {
//     console.log(data + " reject");
//   });

// *******************************************8

// const resolveBtn = document.querySelector("#resolve-btn");
// const rejectBtn = document.querySelector("#reject-btn");

// const p = new Promise((resolve, reject) => {
//   resolveBtn.addEventListener("click", () => {
//     resolve("Promise Resolveddd");
//   });

//   rejectBtn.addEventListener("click", () => {
//     reject("Promise Rejected");
//   });
// });

// p.then((data) => {
//   console.log(data);
//   return 155;
// })
//   .then((data) => {
//     console.log(data);
//     return "Anurag";
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
