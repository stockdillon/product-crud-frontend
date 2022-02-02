import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
      ProductListComponent,
  ]
})
export class ProductListModule { }
