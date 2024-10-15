// const num = [1, 2, 3, 4, 5];

// num.reduce((accumulator, current, i) => {
//   console.log(current);
// });

// num.reduce((accumulator, current, i) => {
//   console.log(accumulator);
// });

// num.reduce((accumulator, current, i) => {
//   console.log("accumulator", accumulator, " current", current);
// });

// num.reduce((accumulator, current, i) => {
//   console.log("accumulator", accumulator, " current", current);
//   return "ravi";
// });

// num.reduce((accumulator, current, i) => {
//   console.log("accumulator", accumulator, " current", current);
//   return accumulator + current;
// });

// num.reduce((accumulator, current, i) => {
//   console.log("accumulator", accumulator, " current", current);
//   return accumulator + current;
// }, 2);

const num = [1, 2, 3, 4, 5];

// const result = num.reduce((accumulator, value, index, myarr) => {
//   console.log(accumulator, value);
//   return accumulator + value;
// });

const result = num.reduce((accumulator, value, index, myarr) => {
  //   console.log(value);
  return accumulator + value;
}, 10);

console.log(result);
