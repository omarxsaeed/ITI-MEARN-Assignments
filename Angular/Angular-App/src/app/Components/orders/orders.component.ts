import { Component } from '@angular/core';
import {
  ICategory,
  DiscountOffers,
} from '../../SharedClassesandtypes/category';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  storeName: String;
  storeLogo: String;
  Discount: DiscountOffers;
  categoryList: ICategory[];
  selectedCategory: number = 0;
  receivedOrderTotalPrice: number = 0;
  constructor() {
    this.storeName = 'Exotech';
    this.storeLogo = '../assets/logo.jpg';
    this.Discount = 10;

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
  }

  updateTotalPrice(totalPrice: number) {
    this.receivedOrderTotalPrice = totalPrice;
  }
}
