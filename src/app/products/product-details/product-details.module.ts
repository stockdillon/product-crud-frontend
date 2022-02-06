import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material/material.module';
import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
    declarations: [
        ProductDetailsComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        RouterModule,
    ],
    exports: [
        ProductDetailsComponent,
        ProductDetailsRoutingModule,
    ]
})
export class ProductDetailsModule { }
