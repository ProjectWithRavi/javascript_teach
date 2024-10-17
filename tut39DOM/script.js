function sayHi() {
  document.body.children[4].src =
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg";
}

// document.body.children
// document.children[0].children[1].children

// **************************************** access inner properties of element
// document.children[0].children[1].children[0].innerText
// document.children[0].children[1].children[0].innerHTML
// document.children[0].children[1].children[0].textContent

// ************************************* see html element a object using console.dir
// console.dir(document.children[0].children[1].children[0])

// ****************************** we can store html in variable , because html internally a object
// let a = document.children[0].children[1].children[0]
