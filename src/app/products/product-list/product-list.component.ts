import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { IProductDetailsDto, ProductDetailsDto } from '../product-details/product-details.dto';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'description'];
  dataSource: MatTableDataSource<ProductDetailsDto>;

  filter: FormControl = new FormControl('');

  products$: Observable<ProductDetailsDto[]>;
  constructor(private productService: ProductService) {
    this.dataSource = new MatTableDataSource<ProductDetailsDto>();
    this.products$ = this.productService.getProducts().pipe(
      tap((products: ProductDetailsDto[]) => {
        this.dataSource.data = products;
      })
    );
    this.filter.valueChanges.subscribe((filterValue: string) => {
      this.dataSource.filter = filterValue;
    })
  }

  ngOnInit(): void {
  }

  select(item: ProductDetailsDto) {
    console.log('item selected: ', item);
  }

}
