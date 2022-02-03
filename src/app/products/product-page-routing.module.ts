import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page.component';

const routes: Routes = [
    { path: '', component: ProductPageComponent, pathMatch: 'full' },
    { path: 'list', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule) },
    { path: ':name', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductPageRoutingModule { }