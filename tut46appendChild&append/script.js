const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
const card = document.querySelector(".card");

// *********************************** appendChild ***********************************

// ************************** if you want cut and then past element from other place then you use appendChild method
// container.appendChild(h1)

// ********************* if you want copy and then past element from other place , then first you use cloneNode() for create copy and then use appendChild for append element from other place
// container.cloneNode()    //--> give copy element without inner text or inner html
// container.cloneNode(true)  //--> with innerText and innerHtml

// let getCopy = container.cloneNode(true);
// container.appendChild(getCopy);

// *********** note : we can not append parent element , using appendChild

// ********************************* append ***********************************************

// append same as append child , but we can not add text using appendChild
// container.append("hello")

// we can append multiple things using append method , append method not return any other value
// container.append('hello world',h1)

// ************************** if you want add text using append child
// let a = document.createTextNode('hello world')
// container.appendChild(a)

// for (let i = 2; i <= 100; i++) {
//   const newCard = card.cloneNode();
//   newCard.innerText = i;
//   container.append(newCard);
// }
