import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductCreateModule } from './product-create/product-create.module';
import { ProductListModule } from './product-list/product-list.module';

@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    ProductCreateModule,
    ProductListModule,
    CommonModule, 
    ProductPageRoutingModule,
  ],
})
export class ProductModule { }
