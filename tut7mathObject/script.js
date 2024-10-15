/* *************************** Operator**************************
Whenever we perform any operation, it has two major components
1. operands
2. operator 

*/

// biDefault math.random print numbers betweens zero and one , but one will never come
// Math.random()*20  , so 0*20 to 1*20

const width = +prompt("Please Enter Rectangle Width");
const height = +prompt("Please Enter Rectangle Height");

console.log(width * height);
document.write(`Rectangle Area: ${width * height}`);
