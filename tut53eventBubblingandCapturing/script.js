const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

// *************** here we add event listener on green box , but also work on child box
// green.addEventListener("click", () => {
//   console.log("trigger green box");
// });

// *********************************** event bubbling **************************
// green.addEventListener("click", () => {
//   console.log("trigger green box");
// });
// pink.addEventListener("click", () => {
//   console.log("trigger pink box");
// });
// blue.addEventListener("click", () => {
//   console.log("trigger blue box");
// });

// ********

// window.addEventListener("click", () => {
//   console.log("trigger window ");
// });
// document.addEventListener("click", () => {
//   console.log("trigger document ");
// });
// document.body.addEventListener("click", () => {
//   console.log("trigger document body");
// });
// green.addEventListener("click", () => {
//   console.log("trigger green box");
// });
// pink.addEventListener("click", () => {
//   console.log("trigger pink box");
// });
// blue.addEventListener("click", () => {
//   console.log("trigger blue box");
// });

// **************** we can stop event bubbling using stopPropagation() method

// green.addEventListener("click", () => {
//   console.log("trigger green box");
// });
// pink.addEventListener("click", () => {
//   console.log("trigger pink box");
// });
// blue.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("trigger blue box");
// });

// ***************************** capturing
// green.addEventListener(
//   "click",
//   () => {
//     console.log("trigger green box");
//   },
//   true
// );
// pink.addEventListener(
//   "click",
//   () => {
//     console.log("trigger pink box");
//   },
//   true
// );
// blue.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("trigger blue box");
//   },
//   true
// );

// *** second way to use capturing
// green.addEventListener(
//   "click",
//   () => {
//     console.log("trigger green box");
//   },
//   { capture: true }
// );
// pink.addEventListener(
//   "click",
//   () => {
//     console.log("trigger pink box");
//   },
//   { capture: true }
// );
// blue.addEventListener(
//   "click",
//   (e) => {
//     console.log("trigger blue box");
//   },
//   { capture: true }
// );

// *********************************** when you want run event only one time then use {once:true} as third argument in event listener
// green.addEventListener(
//   "click",
//   () => {
//     console.log("trigger green box");
//   },
//   { once: true }
// );
