import { Component, Input, OnInit } from '@angular/core';
import { IProductDetailsDto, ProductDetailsDto } from './product-details.dto';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() name: string = 'macbook';
  name$: BehaviorSubject<string> = new BehaviorSubject<string>('macbook');
  product: IProductDetailsDto = new ProductDetailsDto();
  product$: Observable<ProductDetailsDto> = of(this.product);
  constructor(private productService: ProductService) { 
    // this.product.name = name;

    this.product$ = this.productService.getProduct(this.name);
  }

  ngOnInit(): void {
  }

}
