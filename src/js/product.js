import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import { getProjectDetail } from "./project-detail.js";

const dataSource = new ProductData("tents");

const cartItems = getLocalStorage("so-cart") || [];
function addProductToCart(product) {
  cartItems.push(product);
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

// const productItem = document.querySelectorAll(".product-card >a");
// productItem.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     getProjectDetail();
//   });
// });
getProjectDetail();
