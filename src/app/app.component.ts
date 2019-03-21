import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as SupplyActions from './store/supply.actions';
import * as ProductActions from './store/product.actions';
import * as PriceFactorActions from './store/price-factor.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Price Calculator';

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new SupplyActions.Load());
    this.store.dispatch(new ProductActions.Load());
    this.store.dispatch(new PriceFactorActions.Load());
  }
}
