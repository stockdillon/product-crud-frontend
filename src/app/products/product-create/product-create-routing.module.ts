import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create.component';

const routes: Routes = [
  // { outlet:'dialog', path: '', component: ProductCreateComponent },
  { path: 'create', component: ProductCreateComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCreateRoutingModule { }
