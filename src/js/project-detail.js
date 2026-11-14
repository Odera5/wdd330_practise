import ProductData from "./ProductData.mjs";

const getProjectDetail = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  const productData = new ProductData("tents");
  const product = await productData.findProductById(projectId);
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
};

export { getProjectDetail };
