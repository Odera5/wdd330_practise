import { getProductId } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./product-detail.mjs";

const dataSource = new ProductData("tents");
const productID = getProductId("id");

const product = new ProductDetails(productID, dataSource);
product.init();

// add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);

// const productItem = document.querySelectorAll(".product-card >a");
// productItem.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     getProjectDetail();
//   });
// });
// const productId = getProductId("id");
// const productDetail = new ProductDetails(productId, dataSource);
// productDetail.init();
