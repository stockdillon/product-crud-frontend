import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, of, Subject, tap, concatMap } from 'rxjs';
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
  selected: ProductDetailsDto | null = null;

  filter: FormControl = new FormControl('');
  // selected$: Subject<ProductDetailsDto> = new Subject<ProductDetailsDto>();
  toDelete$: Subject<ProductDetailsDto> = new Subject<ProductDetailsDto>();
  delete$: Observable<any> = this.toDelete$.pipe(
    concatMap((product: ProductDetailsDto) => {
      return this.productService.deleteProduct(product.name);
    })
  );

  products$: Observable<ProductDetailsDto[]>;
  constructor(
    private productService: ProductService,
    private _snackBar: MatSnackBar,
    ) {
    this.dataSource = new MatTableDataSource<ProductDetailsDto>();
    this.products$ = this.productService.products$.pipe(
      tap((products: ProductDetailsDto[]) => {
        this.dataSource.data = products;
      })
    );
    this.filter.valueChanges.subscribe((filterValue: string) => {
      this.dataSource.filter = filterValue;
    });

  }

  ngOnInit(): void {
  }

  select(item: ProductDetailsDto) {
    console.log('item selected: ', item);
    this.selected = item;
  }

  delete(item: ProductDetailsDto) {
    console.log('item deleted: ', item);
    this.productService.deleteProduct(item.name);
    this.toDelete$.next(item);
    this._snackBar.open(`${item.name} Deleted!`, 'close')
  }

}
