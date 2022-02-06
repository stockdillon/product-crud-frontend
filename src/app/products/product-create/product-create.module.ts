import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';

import { ProductCreateRoutingModule } from './product-create-routing.module';
import { ProductCreateComponent } from './product-create.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogProduct } from './dialog';


@NgModule({
  declarations: [
    DialogProduct,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductCreateRoutingModule,
    MaterialModule,
  ],
  exports: [
    ProductCreateComponent
  ],
  providers: [
    CurrencyPipe,
    DecimalPipe,
  ]
})
export class ProductCreateModule { }
