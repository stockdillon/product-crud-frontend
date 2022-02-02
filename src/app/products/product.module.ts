import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page.component';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
