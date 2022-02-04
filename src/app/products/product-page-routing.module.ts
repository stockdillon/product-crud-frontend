import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list'},
    { path: '', component: ProductPageComponent, children: [
        { path: 'list', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule) },
        { path: 'edit/:name', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) },
        { path: 'create', loadChildren: () => import('./product-create/product-create.module').then(m => m.ProductCreateModule) }
    ]},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductPageRoutingModule { }