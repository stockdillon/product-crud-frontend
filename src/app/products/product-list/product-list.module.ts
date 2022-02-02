import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductListComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    ProductListComponent,
  ],
  imports: [
  ],
  exports: [
      ProductListComponent,
  ]
})
export class ProductListModule { }
