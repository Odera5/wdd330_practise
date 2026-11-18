import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    // use the datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);
    // the product details are needed before rendering the HTML
    this.renderProductDetails();
    // once the HTML is rendered, add a listener to the Add to Cart button
    // Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings from this week on 'this' to understand why.
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }

  addProductToCart() {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}

function productDetailsTemplate(product) {
  const template = document.querySelector(".product-template");
  const productDetail = document.querySelector(".product-detail");
  const clone = template.content.cloneNode(true);
  const [
    brand_name,
    product_name,
    product_img,
    product_card__price,
    product__color,
    product__description,
  ] = clone.querySelectorAll("h3,h2,img,p,p,p");
  brand_name.textContent = product.Brand.Name;
  product_name.textContent = product.Name;
  product_img.src = product.Image;
  product_card__price.textContent = `$${product.ListPrice}`;
  product__color.textContent = product.Colors[0].ColorName;
  product__description.innerHTML = product.DescriptionHtmlSimple;
  productDetail.appendChild(clone);
  console.log(product);
}
