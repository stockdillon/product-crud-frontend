import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IProductDetailsDto, ProductDetailsDto } from '../product-details/product-details.dto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductDetailsDto[]> = of([]);
  constructor(private productService: ProductService) { 
    this.products$ = this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}
