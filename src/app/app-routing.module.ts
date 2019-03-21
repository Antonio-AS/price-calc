import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplyFormComponent } from './supply-form/supply-form.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { PriceFactorComponent } from './price-factor/price-factor.component';

const routes: Routes = [
  { path: 'supply/new', component: SupplyFormComponent },
  { path: 'supply/:name', component: SupplyFormComponent },
  { path: 'supplies', component: SuppliesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/new', component: ProductFormComponent },
  { path: 'product/:name', component: ProductFormComponent },
  { path: 'price-factor', component: PriceFactorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
