import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product', component: ProductComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class AppRoutingModule { }
