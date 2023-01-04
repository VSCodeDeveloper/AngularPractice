import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { SpaceRemovalPipe } from '../shared/spaceremoval.pipe';
import { ProductService } from '../Services/product.service';
import { Subscription } from 'rxjs';
@Component({
  templateUrl: './product-list.component.html',
  styleUrls: [
    '../../styles.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class ProductListComponenet implements OnInit {
  sub!: Subscription;
  errorMessage: string = '';
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter = '';
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  constructor(private productservice: ProductService) {}
  onRatingClicked(message: string) {
    this.pageTitle = message;
  }
  ngOnInit(): void {
    this.sub = this.productservice.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLowerCase().includes(filterBy)
    );
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
}
