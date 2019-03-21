import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupplyFormComponent } from './supply-form/supply-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { ProductsComponent } from './products/products.component';
import { PriceFactorComponent } from './price-factor/price-factor.component';
import { supplyReducer } from './store/supply.reducer';
import { productReducer } from './store/product.reducer';
import { priceFactorReducer } from './store/price-factor.reducer';
import { SupplyEffects } from './store/supply.effects';
import { ProductEffects } from './store/product.effects';
import { PriceFactorEffects } from './store/price-factor.effects';

@NgModule({
  declarations: [
    AppComponent,
    SupplyFormComponent,
    ProductFormComponent,
    SuppliesComponent,
    ProductsComponent,
    PriceFactorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      supply: supplyReducer,
      product: productReducer,
      priceFactor: priceFactorReducer
    }),
    EffectsModule.forRoot([
      SupplyEffects,
      ProductEffects,
      PriceFactorEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
