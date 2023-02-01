import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IProduct } from '../../SharedClassesandtypes/Product';
import {
  ICategory,
  DiscountOffers,
} from '../../SharedClassesandtypes/category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges {
  private productList: IProduct[];
  categorizedProductList: IProduct[] = [];
  @Input() receivedCategoryID: number = 0;
  clientName: String;
  isPurchased: Boolean;
  orderTotalPrice: number = 0;
  @Output() onTotalPriceChange: EventEmitter<number>;
  purchaseDate: Date = new Date();
  constructor() {
    this.onTotalPriceChange = new EventEmitter<number>();
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
    this.clientName = 'Anas';
    this.isPurchased = false;
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.receivedCategoryID == 0) {
      this.categorizedProductList = this.productList;
    } else {
      this.categorizedProductList = [];
      this.categorizedProductList = this.productList.filter(
        (product) => product.categoryID == this.receivedCategoryID
      );
    }
  }

  // update price and reduce stock
  onBuy(event: any): void {
    event.preventDefault();
    // if (product.quantity > 0) product.quantity--;

    this.isPurchased = true;
  }

  addToCart(itemsCount: number, product: IProduct): void {
    if (product.quantity >= itemsCount) {
      product.quantity -= itemsCount;
      this.updateOrderTotalPrice(itemsCount, product.price);
    }
  }

  updateOrderTotalPrice(itemsCount: number, price: number) {
    this.orderTotalPrice += itemsCount * price;
    this.onTotalPriceChange.emit(this.orderTotalPrice);
    console.log(this.orderTotalPrice);
  }
  // displaySelectedProducts(selectedCategory: number): void {
  //   this.selectedProductList = [];
  //   this.productList.forEach((product) => {
  //     if (product.categoryID == this.selectedCategory) {
  //       this.selectedProductList.push(product);
  //     }
  //   });
  // }
}
