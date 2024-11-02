const addCardBtn = document.querySelector(".add-card");
const container = document.querySelector(".container");

const cardsList = document.querySelectorAll(".card");

// *******************************************

// let count = 1;

// addCardBtn.addEventListener("click", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// cardsList.forEach((card) => {
//   card.addEventListener("click", () => {
//     card.remove();
//   });
// });

// ****************************************************
// let count = 1;

// addCardBtn.addEventListener("click", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   newCard.addEventListener("click", () => {
//     newCard.remove();
//   });
//   container.append(newCard);
// });

// ****************************************************

// let count = 1;

// addCardBtn.addEventListener("click", () => {
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count++;
//   container.append(newCard);
// });

// container.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (e.target !== container) {
//     e.target.remove();
//   }
// });
