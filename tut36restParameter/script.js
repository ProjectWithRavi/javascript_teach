// function sum(a, b) {
//   console.log(a + b);
// }

// sum(1, 2);

// ********************************************
// function sum(...getParams) {
//   console.log(getParams);
// }

// sum(1, 2, 3, 4);

// *************************************
// function sum(a, b, ...getParams) {
//   console.log(a, b);
//   console.log(getParams);
// }

// sum(1, 2, 3, 4);

// *************************************
// function sum(...getParams) {
//   const result = getParams.reduce((acc, currentValue) => {
//     return acc + currentValue;
//   });
//   console.log(result);
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8);

// **************************************** we can not use rest parameter in starting
// function sum(...getParams,a,b) {
//   const result = getParams.reduce((acc, currentValue) => {
//     return acc + currentValue;
//   });
//   console.log(result);
// }

// sum(1, 2, 3, 4, 5, 6, 7, 8);

// **************************** rest parameter with spread operator
// const num = [1, 2, 3, 4];

// function sum(...getParams) {
//   console.log(getParams);
// }

// sum(...num, 5, 6, 7, 8);
