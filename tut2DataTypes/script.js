// // strint to number
// console.log(+"100");
// console.log(+"eedrrr");

// console.log(parseInt("100"));
// console.log(parseInt("100refrrff"));
// console.log(parseInt("rtft100refrrff"));

// //NaN is also a number but this is not valid number

// //number to string
// console.log(100 + "");
// console.log("" + 100);

// // boolean convert to number
// console.log(+true);
// console.log(+false);

// // undefined
// console.log(+undefined);

// //null
// console.log(+null);
// console.log(typeof null); //this is bug

// **************************************************** symbol -->symbol data type की मदद से हम स्ट्रिंग को यूनिक बना सकते है
// Every Symbol value is unique. Even if two symbols are created with the same description, they are distinct from one another.

// js
// Copy code
// const sym1 = Symbol('description');
// const sym2 = Symbol('description');
// console.log(sym1 === sym2); // false

//2. Immutability: Once created, symbols are immutable, meaning their value cannot be changed.

// let mySymbol = Symbol("immutableSymbol");

// mySymbol = Symbol("newSymbol");
// console.log(mySymbol);

// इसका मतलब यह है कि उसने सिंबल को चेंज नही किया बल्कि एक और यूनिक सिंबल बना दिया

/* ************************************** bigint
JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
JavaScript integers are only accurate up to 15 digits:
To create a BigInt, append n to the end of an integer or call BigInt():
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

*/

//******* without use bigint
let x = 9999999999999999;
console.log(x);

// javascript 15 digit से ऊपर के नंबर को स्टोर नही कर पाता है इसलिए वो कुछ अलग ही रिजल्ट शो करता है
