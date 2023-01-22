import { Component } from '@angular/core';
import { IProduct } from '../SharedClassesandtypes/Product';
import { ICategory, DiscountOffers } from '../SharedClassesandtypes/category';

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
  constructor() {
    this.Discount = 10;
    this.storeName = 'Exotech';
    this.storeLogo = '../assets/angular-logo.png';
    this.productList = [
      {
        id: 1,
        name: 'Lenvo thinpad X230',
        price: 100,
        quantity: 10,
        categoryID: 1,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 2,
        name: 'Dell',
        price: 200,
        quantity: 20,
        categoryID: 1,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 3,
        name: 'Lenovo Tab',
        price: 100,
        quantity: 10,
        categoryID: 2,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 4,
        name: 'Samsung Tab',
        price: 100,
        quantity: 10,
        categoryID: 2,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 5,
        name: 'Samsung note 10',
        price: 100,
        quantity: 10,
        categoryID: 3,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 6,
        name: 'Samsung S10',
        price: 100,
        quantity: 10,
        categoryID: 3,
        imgURL: 'https://picsum.photos/200',
      },
      {
        id: 7,
        name: 'tochiba Utlra',
        price: 60000,
        quantity: 14,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
      },
      {
        id: 8,
        name: 'Apple Utlra',
        price: 7800060,
        quantity: 6,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
      },
      {
        id: 9,
        name: 'test Utlra',
        price: 7800060,
        quantity: 3,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
      },
      {
        id: 10,
        name: 'jhgfjxz',
        imgURL: 'https://fakeimg.pl/200x100',
        quantity: 33,
        price: 44444444,
        categoryID: 1,
      },
      {
        name: 'fsdjhfgsdjhkgfsh',
        price: 7800060,
        quantity: 3,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 4,
        id: 11,
      },
    ];
    this.categoryList = [
      {
        id: 1,
        name: 'Laptops',
        desciption: 'This is description',
      },
      {
        id: 2,
        name: 'Tablets',
        desciption: 'This is description',
      },
      {
        id: 3,
        name: 'Mobiles',
        desciption: 'This is description',
      },
    ];
    this.clientName = 'Anas';
    this.isPurchased = false;
  }

  onBuy() {
    this.isPurchased = true;
  }
}
