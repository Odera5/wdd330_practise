import { renderListWithTemplate } from "./utils.mjs";
export class ProductList {
  constructor(dataSource, ListElement) {
    (this.dataSource = dataSource), (this.ListElement = ListElement);
  }

  async init() {
    const data = await this.dataSource.getData();
    console.log(data);

    this.renderList(data);
  }
  renderList(data) {
    renderListWithTemplate(data, templateHTML, this.ListElement);
  }
}

function templateHTML(data) {
  return `
  <li class="product-card">
            <a href="./product_pages/product-detail.html?id=${data.Id}">
              <img
                src="${data.Image}"
                alt="Marmot Ajax tent"
              />
              <h3 class="card__brand">${data.Brand.Name}</h3>
              <h2 class="card__name">${data.Name}</h2>
              <p class="product-card__price">${data.ListPrice}</p>
            </a>
          </li>
          
  `;
}
