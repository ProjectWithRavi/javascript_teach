const h1 = document.querySelector("h1");
const container = document.querySelector(".container");
// const firstImage = document.querySelector("img")

// *************************************************************************
// let b = document.createElement("img");
// b.src =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
// document.body.children[1].append(b);

// ******************************************************************************
// let b = document.createElement("img");
// b.src =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
// let mypara = (document.createElement("p").innerText = 1);
// document.body.children[1].append(b, mypara);

// const paragraph = document.createElement("p");
// paragraph.innerText = 'Hello'
// paragraph.classList.add('my-para')

// container.append(paragraph)

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

for (let i = 1; i <= 100; i++) {
  const newImg = document.createElement("img");
  newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  container.append(newImg);
}

// const newImage = document.createElement('img')

// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`

// container.append(newImage)
