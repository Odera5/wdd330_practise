import ProductData from "./ProductData.mjs";
import { ProductList } from "./ProductList.mjs";

const dataSource = new ProductData("tents");

const element = document.querySelector(".product-list");

const productList = new ProductList(dataSource, element);

productList.init();
console.log("JavaScript is running!");
