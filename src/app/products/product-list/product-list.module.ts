import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { CommonModule } from '@angular/common';
import { ProductListRoutingModule } from './product-list-routing.module';
import { MaterialModule } from 'src/app/material/material/material.module';

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    MaterialModule,
  ],
  exports: [
      ProductListComponent,
  ]
})
export class ProductListModule { }
