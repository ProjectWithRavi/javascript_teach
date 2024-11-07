// const usersData = [
//   {
//     id: 1,
//     firstName: "Terry",
//     lastName: "Medhurst",
//     maidenName: "Smitham",
//     age: 50,
//     gender: "male",
//     email: "atuny0@sohu.com",
//     phone: "+63 791 675 8914",
//     username: "atuny0",
//     password: "9uQFF1Lh",
//     birthDate: "2000-12-25",
//     image: "https://robohash.org/hicveldicta.png",
//     bloodGroup: "A−",
//     height: 189,
//     weight: 75.4,
//     eyeColor: "Green",
//     hair: {
//       color: "Black",
//       type: "Strands",
//     },
//   },
// ];

// export { usersData };

// ********************* if you want multiple code export
// const usersData = [
//   {
//     id: 1,
//     firstName: "Terry",
//     lastName: "Medhurst",
//     maidenName: "Smitham",
//     age: 50,
//     gender: "male",
//     email: "atuny0@sohu.com",
//     phone: "+63 791 675 8914",
//     username: "atuny0",
//     password: "9uQFF1Lh",
//     birthDate: "2000-12-25",
//     image: "https://robohash.org/hicveldicta.png",
//     bloodGroup: "A−",
//     height: 189,
//     weight: 75.4,
//     eyeColor: "Green",
//     hair: {
//       color: "Black",
//       type: "Strands",
//     },
//   },
// ];

// const usersData2 = [
//   {
//     id: 1,
//     firstName: "Terry",
//     lastName: "Medhurst",
//     maidenName: "Smitham",
//     age: 50,
//     gender: "male",
//     email: "atuny0@sohu.com",
//     phone: "+63 791 675 8914",
//     username: "atuny0",
//     password: "9uQFF1Lh",
//     birthDate: "2000-12-25",
//     image: "https://robohash.org/hicveldicta.png",
//     bloodGroup: "A−",
//     height: 189,
//     weight: 75.4,
//     eyeColor: "Green",
//     hair: {
//       color: "Black",
//       type: "Strands",
//     },
//   },
// ];

// export { usersData, usersData2 };

// *********************************************************** by default export
// const usersData = [
//   {
//     id: 1,
//     firstName: "Terry",
//     lastName: "Medhurst",
//     maidenName: "Smitham",
//     age: 50,
//     gender: "male",
//     email: "atuny0@sohu.com",
//     phone: "+63 791 675 8914",
//     username: "atuny0",
//     password: "9uQFF1Lh",
//     birthDate: "2000-12-25",
//     image: "https://robohash.org/hicveldicta.png",
//     bloodGroup: "A−",
//     height: 189,
//     weight: 75.4,
//     eyeColor: "Green",
//     hair: {
//       color: "Black",
//       type: "Strands",
//     },
//   },
// ];

// export default usersData;

// *********************************************************** if you want change export name
// const usersData = [
//   {
//     id: 1,
//     firstName: "Terry",
//     lastName: "Medhurst",
//     maidenName: "Smitham",
//     age: 50,
//     gender: "male",
//     email: "atuny0@sohu.com",
//     phone: "+63 791 675 8914",
//     username: "atuny0",
//     password: "9uQFF1Lh",
//     birthDate: "2000-12-25",
//     image: "https://robohash.org/hicveldicta.png",
//     bloodGroup: "A−",
//     height: 189,
//     weight: 75.4,
//     eyeColor: "Green",
//     hair: {
//       color: "Black",
//       type: "Strands",
//     },
//   },
// ];

// export { usersData as myData };

// ************************************************ you can export anything
// const name = "ravi";
// const obj = {
//   name: "shyam",
// };
// export { name, obj };

// *************************************** you can export two different way in one time
const name = "ravi";
const obj = {
  name: "shyam",
};
export { name };
export default obj;

// ********************************** we can also export like this , but not work in export default case
// export const name = "ravi";

// ********************* in function case
// function myFun() {
//   console.log("hello");
// }

// export { myFun };

// %%%
// export function myFun() {
//   console.log("hello");
// }

// %%%
// export default function myFun() {
//   console.log("hello");
// }

// ************************************************
// export const usersData = [
//   {
//     id: 1,
//     firstName: 'Terry',
//     lastName: 'Medhurst',
//     maidenName: 'Smitham',
//     age: 50,
//     gender: 'male',
//     email: 'atuny0@sohu.com',
//     phone: '+63 791 675 8914',
//     username: 'atuny0',
//     password: '9uQFF1Lh',
//     birthDate: '2000-12-25',
//     image: 'https://robohash.org/hicveldicta.png',
//     bloodGroup: 'A−',
//     height: 189,
//     weight: 75.4,
//     eyeColor: 'Green',
//     hair: {
//       color: 'Black',
//       type: 'Strands',
//     }
// }

// ]

// export const myName = 'Anurag Singh'

// export default function getFirstUser() {
//     return usersData[0]
// }

// console.log('usersssss Dataaaa');

// export default usersData

// export { usersData, myName as myNames }
// export { myName }
