const addCardBtn = document.querySelector(".card");
const container = document.querySelector(".container");
const input = document.querySelector("input");
const form = document.querySelector("form");

// **************************************************
let count = 1;

// addCardBtn.addEventListener("click", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// addCardBtn.click();

// setInterval(() => {
//   addCardBtn.click();
// }, 1000);

// *****************************************
// input.focus();
// setTimeout(() => {
//   input.focus();
//   console.log("Input Focused");
// }, 2000);

// setTimeout(() => {
//   input.blur();
//   console.log("Input Blurred");
// }, 4000);

// setTimeout(() => {
//   form.submit();
//   console.log("Form Submitted");
// }, 3000);

// form.reset()

// const intervalId = setInterval(() => {
//   if (count > 999) {
//     clearInterval(intervalId);
//   }
//   addCardBtn.click();
// }, 5);

// ******************************************
let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  alert("Mouse Clicked");
});

// let clickEvent = new Event('click');
// btn.dispatchEvent(clickEvent);
