import { Injectable } from '@angular/core';
import { IProduct } from '../SharedClassesandtypes/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productList: IProduct[];
  constructor() {
    this.productList = [
      {
        id: 1,
        name: 'Lenvo thinpad X230',
        price: 100,
        quantity: 2,
        categoryID: 1,
        imgURL: '',
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
        imgURL: 'https://picsum.photos/200',
        categoryID: 4,
      },
      {
        id: 8,
        name: 'Apple Utlra',
        price: 7800060,
        quantity: 6,
        imgURL: 'https://picsum.photos/200',
        categoryID: 4,
      },
      {
        id: 9,
        name: 'test Utlra',
        price: 7800060,
        quantity: 3,
        imgURL: 'https://picsum.photos/200',
        categoryID: 4,
      },
      {
        id: 10,
        name: 'jhgfjxz',
        imgURL: 'https://picsum.photos/200',
        quantity: 33,
        price: 44444444,
        categoryID: 1,
      },
      {
        name: 'fsdjhfgsdjhkgfsh',
        price: 7800060,
        quantity: 3,
        imgURL: 'https://picsum.photos/200',
        categoryID: 4,
        id: 11,
      },
    ];
  }

  getProductsByCategoryID(catID: number): IProduct[] {
    if (catID == 0) {
      return this.productList;
    } else {
      return this.productList.filter((product) => product.categoryID == catID);
    }
  }

  getProductByID(productID: number): IProduct | undefined {
    return this.productList.find((product) => product.id == productID);
  }

  getProductIDsList() {
    return this.productList.map((product) => product.id);
  }
}
