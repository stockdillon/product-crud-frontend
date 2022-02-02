import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductListRoutingModule } from './product-page-routing.module';

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule, 
    ProductListRoutingModule,
  ]
})
export class ProductModule { }
