import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
  { path: '', component: ProductDetailsComponent, pathMatch: 'full' },
//   { path: 'list', loadChildren: () => import('./product-list.pro').then(m => m.ProductModule) },
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  declarations: [
    ProductDetailsComponent,
  ],
  imports: [
  ],
  exports: [
      ProductDetailsComponent
  ]
})
export class ProductDetailsModule { }
