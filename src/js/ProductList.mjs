import { renderListWithTemplate } from "./utils.mjs";
export class ProductList {
  constructor(dataSource, ListElement, category) {
    (this.dataSource = dataSource),
      (this.ListElement = ListElement),
      (this.category = category);
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    console.log(list);

    this.renderList(list);
  }
  renderList(data) {
    renderListWithTemplate(data, templateHTML, this.ListElement);
  }
}

function templateHTML(data) {
  console.log("form product listing", data.Images.PrimaryMedium);

  return `
  <li class="product-card">
            <a href="../product_pages/product-detail.html?id=${data.Id}">
              <img
                src="${data.Images.PrimaryMedium}"
                alt="Marmot Ajax tent"
              />
              <h3 class="card__brand">${data.Brand.Name}</h3>
              <h2 class="card__name">${data.Name}</h2>
              <p class="product-card__price">$${data.ListPrice}</p>
            </a>
          </li>
          
  `;
}
