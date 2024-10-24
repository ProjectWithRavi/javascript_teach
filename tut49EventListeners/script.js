/*
we can use event listeners three way
1. in html
2. in javascript
3. using addEventLIstener
*/

const h1 = document.querySelector("h1");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

function sayHi() {
  console.log("Hiiiii");
}

function secondSayHi() {
  console.log("Second Hi");
}

// **************************** second way to use event listeners
// h1.onclick = sayHi;
// h1.onclick = secondSayHi;

// ************************* third way to use event listeners
// h1.addEventListener("click", sayHi);
// h1.addEventListener("click",()=>{
//   console.log("this is third way");
// })
// h1.addEventListener("click", secondSayHi);

// h1.addEventListener("dblclick", () => {
//   console.log("double click");
// });

let count = 1;

card.addEventListener("click", () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  // const newCard = card.cloneNode()
  // newCard.classList.remove('add-card')
  console.log(newCard);
  newCard.innerText = count++;
  container.append(newCard);
});
