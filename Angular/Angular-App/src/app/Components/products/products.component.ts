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
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges {
  // private productList: IProduct[];
  categorizedProductList: IProduct[] = [];
  @Input() receivedCategoryID: number = 0;
  clientName: String;
  isPurchased: Boolean;
  orderTotalPrice: number = 0;
  @Output() onTotalPriceChange: EventEmitter<number>;
  purchaseDate: Date = new Date();
  constructor(private prdService: ProductsService) {
    this.onTotalPriceChange = new EventEmitter<number>();
    this.clientName = 'Anas';
    this.isPurchased = false;
  }
  ngOnInit(): void {
    this.categorizedProductList = this.prdService.getProductsByCategoryID(
      this.receivedCategoryID
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.categorizedProductList = this.prdService.getProductsByCategoryID(
      this.receivedCategoryID
    );

    // if (this.receivedCategoryID == 0) {
    //   this.categorizedProductList = this.productList;
    // } else {
    //   this.categorizedProductList = [];
    //   this.categorizedProductList = this.productList.filter(
    //     (product) => product.categoryID == this.receivedCategoryID
    //   );
    // }
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
