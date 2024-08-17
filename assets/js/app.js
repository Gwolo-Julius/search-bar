import { products } from "./data.js";

// Grabbing html elements to JavaScript
const productContainer = document.querySelector("#product__container");
const inputEl = document.querySelector(".search__input");
const productName = document.querySelector(".product__name");

// Getting values from the input field and filtering
const filterFun = () => {
  inputEl.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCharacter = products.filter((character) => {
      return character.name.toLowerCase().includes(searchString);
    });
    generateProducts(filteredCharacter);
  });
};
filterFun();

// Function for generating products
const generateProducts = (products) => {
  return (productContainer.innerHTML = products
    .map((product) => {
      const { img, desc, name, price } = product; //Destructuring the Object.
      return `
        <div class="product__card">
          <div class="image__wrapper">
            <img src="${img}" alt="">
          </div>
          <div class="desc__price">
            <h2 class="product__name">${name}</h2>
            <p class="description">${desc}</p>
            <div class="price__btn">
              <h4 class="price">$${price}</h4>
              <button class="btn">Add to Cart</button>
            </div>
          </div>
        </div>
        `;
    })
    .join(""));
};
generateProducts();
