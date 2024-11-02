// localStorage.setItem(key, value): Stores a value with a specified key.
// localStorage.getItem(key): Retrieves the value associated with the specified key.

const nameElement = document.querySelector(".name-tag");
const nameInput = document.querySelector(".name");
const ageElement = document.querySelector(".age-tag");
const ageInput = document.querySelector(".age");

// ****************************************************************************

// nameElement.innerText = localStorage.myName;
// nameElement.innerText = localStorage.getItem("myName");

// ************************************************************************

// nameInput.addEventListener("input", (e) => {
//   localStorage.setItem("myName", e.target.value);
//   nameElement.innerText = localStorage.getItem("myName");
// });

// ageElement.innerText = localStorage.getItem("myAge");
// ageInput.addEventListener("input", (e) => {
//   localStorage.setItem("myAge", e.target.value);
//   ageElement.innerText = localStorage.getItem("myAge");
// });

// ****************************************************************************
// localstorage में केवल स्ट्रिंग ही store कर सकते है तो अगर हमे ऑब्जेक्ट को store करना हो तो हम उसे डायरेक्ट localstorage में स्टोर नहीं कर सकते है क्योंकि इसका टाइप ऑब्जेक्ट है न कि स्ट्रिंग । अतः सबसे पहले हमे उसे हैं।स्ट्रिंजिफाई द्वारा ऑब्जेक्ट में कनवर्ट करना पड़ेगा

// let myobj = {
//   name: "shayam",
// };
// localStorage.setItem("myobj", myobj);
// localStorage.setItem("myobj", JSON.stringify(myobj));

// **********************************************************************

// const myData = JSON.parse(localStorage.getItem("myData")) || {};

// if (myData.name) {
//   nameElement.innerText = myData.name;
// }

// if (myData.age) {
//   ageElement.innerText = myData.age;
// }

// nameInput.addEventListener("input", (e) => {
//   myData.name = e.target.value;
//   localStorage.setItem("myData", JSON.stringify(myData));
//   nameElement.innerText = e.target.value;
// });

// ageInput.addEventListener("input", (e) => {
//   myData.age = e.target.value;
//   localStorage.setItem("myData", JSON.stringify(myData));
//   ageElement.innerText = e.target.value;
// });

// **************************************************************************8

// localStorage.removeItem(key): Removes the key and its associated value from storage.
// localStorage.clear(): Removes all key-value pairs from localStorage.
