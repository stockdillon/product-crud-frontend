import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';
import { ProductListRoutingModule } from './product-list-routing.module';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
  ],
  exports: [
      ProductListComponent,
  ]
})
export class ProductListModule { }
