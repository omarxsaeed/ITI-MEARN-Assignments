import { Component } from '@angular/core';
import { IProduct } from '../Shared Classes and types/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  Discount: DiscountOffers;
  storeName: String;
  storeLogo: String;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: String;
  isPurchased: Boolean;
  constructor(
    Discount,
    storeName,
    storeLogo,
    productList,
    categoryList,
    clientName,
    isPurchased
  ) {
    this.Discount = Discount;
    this.storeName = storeName;
    this.storeLogo = storeLogo;
    this.productList = productList;
    this.categoryList = categoryList;
    this.clientName = clientName;
    this.isPurchased = isPurchased;
  }
}
