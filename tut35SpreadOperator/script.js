// const nums1 = [1, 2, 3, 4];
// const nums2 = [5, 6, 7, 8, 9];

// const newArray = nums1.concat(nums2);
// console.log(nums1);
// console.log(newArray);

// ************************** second way

// const nums1 = [1, 2, 3, 4];
// const nums2 = [5, 6, 7, 8, 9];

// const newArray = [...nums1, ...nums2, "ram"];
// console.log(nums1);
// console.log(newArray);

// ************************ argument keyword
// function myfun(a, b) {
//   console.log(arguments);
// }

// myfun(1, 2);

// *************************** spread operator with funciton
// const nums1 = [1, 2, 3, 4];
// const nums2 = [5, 6, 7, 8, 9];

// const newArray = [...nums1, ...nums2, "ram"];
// function myfun() {
//   console.log(arguments);
// }

// myfun(...newArray);

// ****************************************

// const nums1 = [1, 2, 3, 4];
// const nums2 = [5, 6, 7, 8, 9];

// const newArray = [...nums1, ...nums2];
// function myfun() {
//   let sum = 0;
//   for (let value of arguments) {
//     sum += value;
//   }
//   console.log(sum);
// }

// myfun(...newArray);

// ********************************** spread operator with object

// const user = {
//   name: "Anurag",
//   age: 25,
// };

// const updatedUser = { ...user, city: "Bangalore" };
// console.log(updatedUser);
