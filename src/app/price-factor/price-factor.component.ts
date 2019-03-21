import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import * as PriceFactorActions from '../store/price-factor.actions';

@Component({
  selector: 'app-price-factor',
  templateUrl: './price-factor.component.html',
  styleUrls: ['./price-factor.component.css']
})
export class PriceFactorComponent implements OnInit {

  price: number;

  constructor(
      private store: Store<{ priceFactor: number }>,
      private location: Location
  ) { }

  ngOnInit() {
    this.store.select('priceFactor')
        .subscribe(price => this.price = price);
  }

  onSubmit() {
    this.store.dispatch(new PriceFactorActions.Save(this.price));
    this.location.back();
  }
}
