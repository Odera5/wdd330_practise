import { getProductId } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./product-detail.mjs";

const queryParams = window.location.search;
const params = new URLSearchParams(queryParams);
const id = params.get("id");

const dataSource = new ProductData();

const product = new ProductDetails(id);
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
