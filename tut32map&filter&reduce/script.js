// const months = ["January", "February", "March", "April", "May", "December"];

// const capitalMonths = months.forEach((month, index) => {
//     console.log(index + 1, month)
//     return month.toUpperCase()
//   })

// const capitalMonths = months.map((month, index, array) => {
//   // console.log(index + 1, month)
//   // console.log(array);
//   return month.toUpperCase();
// });

// const filteredMonths = months.filter((month, index, array) => {
//     console.log(month.toLocaleLowerCase().includes('m'))
//     // console.log(array);
//     return month.toLocaleLowerCase().includes('m')
//   })

// const filteredMonths = months.filter((month, index, array) => {
//   // console.log(month.toLocaleLowerCase().includes('m'))
//   // console.log(array);
//   return false;
// });

// const students = [
//   {
//     name: "Akash",
//     age: 21,
//   },
//   {
//     name: "Adarsh",
//     age: 17,
//   },
//   {
//     name: "Amir",
//     age: 18,
//   },
//   {
//     name: "Raman",
//     age: 23,
//   },
//   {
//     name: "Nidhi",
//     age: 16,
//   },
// ];

// const adultStudents = students
//   .filter((student) => {
//     return student.age >= 18;
//   })
//   .map((student) => {
//     return student.name;
//   })
//   .filter((student) => {
//     return student.includes("A");
//   });

const months = ["January", "February", "March", "April", "May", "December"];

// const newarray = [];

// for (let i of months) {
//   newarray.push(i.toUpperCase());
// }

// console.log(newarray);

// months.map((value, index, myarr) => {
//   console.log(value, index, myarr);
// });

// const result = months.map((value, index) => {
//   return value.toUpperCase();
// });
// console.log(result);

// months.filter((value, index, myarr) => {
//   return value.length>5;
// });
