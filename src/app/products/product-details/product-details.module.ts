import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
    declarations: [
        ProductDetailsComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ProductDetailsComponent,
        ProductDetailsRoutingModule,
    ]
})
export class ProductDetailsModule { }
