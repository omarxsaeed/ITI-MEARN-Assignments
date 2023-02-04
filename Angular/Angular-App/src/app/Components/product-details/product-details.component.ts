import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/SharedClassesandtypes/Product';
import { ProductsService } from 'src/app/Services/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  private currProductID: number = 0;
  private productIDsList: number[] = [];
  product: IProduct | undefined = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private prdService: ProductsService,
    private location: Location,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productIDsList = this.prdService.getProductIDsList();
    this.currProductID = Number(
      this.activatedRoute.paramMap.subscribe((paramMap) => {
        this.currProductID = Number(paramMap.get('pid'));
        this.product = this.prdService.getProductByID(this.currProductID);
      })
    );
  }

  goBack() {
    this.location.back();
  }

  previousProduct() {
    let currIndex = this.productIDsList.findIndex(
      (val) => val == this.currProductID
    );

    if (currIndex != 0) {
      this.currProductID = this.productIDsList[currIndex - 1];
      this.router.navigate(['/products', this.currProductID]);
    }
  }

  nextProduct() {
    let currIndex = this.productIDsList.findIndex(
      (val) => val == this.currProductID
    );

    if (currIndex < this.productIDsList.length - 1) {
      this.currProductID = this.productIDsList[currIndex + 1];
      this.router.navigate(['/products', this.currProductID]);
    }
  }

  isFirstItem(): boolean {
    return this.currProductID == this.productIDsList[0];
  }

  isLastItem(): boolean {
    return (
      this.currProductID == this.productIDsList[this.productIDsList.length - 1]
    );
  }
}
