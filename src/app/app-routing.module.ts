import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // { outlet:'dialog', path: '', loadChildren: () => import('./products/product.module').then(m => m.ProductModule) },
    { path: 'product', loadChildren: () => import('./products/product.module').then(m => m.ProductModule) },
    { path: '**', redirectTo: 'product' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }