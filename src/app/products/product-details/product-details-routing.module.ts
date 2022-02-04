import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
    { path: '', component: ProductDetailsComponent, pathMatch: 'full' },
    // { path: 'edit/:name', component: ProductDetailsComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }