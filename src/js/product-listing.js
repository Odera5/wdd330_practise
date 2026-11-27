import ProductData from "./ProductData.mjs";
import { ProductList } from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const category = params.get("category");
console.log(category);

const dataSource = new ProductData();

console.log(dataSource);
const productListTitle = document.querySelector(".product h2");

productListTitle.textContent = `Top Products: ${category[0].toUpperCase() + category.slice(1)}`;

const element = document.querySelector(".product-list");

const productList = new ProductList(dataSource, element, category);

productList.init();
loadHeaderFooter();
