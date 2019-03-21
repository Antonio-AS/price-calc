import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {Product} from '../models/product.model';
import {Supply} from '../models/supply.model';
import * as ProductActions from '../store/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;
  supplies: Observable<Supply[]>;
  priceFactor: number;

  constructor(private store: Store<{ product: Product[], supply: Supply[]}>) { }

  ngOnInit() {
    this.products = this.store.select('product');
    this.supplies = this.store.select('supply');
    this.store.select('priceFactor')
        .subscribe(value => this.priceFactor = value);
  }

  delete(product: Product) {
    this.store.dispatch(new ProductActions.Remove(product));
  }

  getCost(product: Product): number {
    let supplies: Supply[];
    this.supplies
        .subscribe((value: Supply[]) => supplies = value);
    let res = 0;
    let flagBreak = false;
    product.supplies.forEach((productSupply: [string, number]) => {
      const supply = supplies.find(valueS => valueS.name === productSupply[0]);
      if (supply !== undefined && !flagBreak) {
        res += productSupply[1] * (supply.price / supply.quantity);
      } else {
        res = 0;
        flagBreak = true;
      }
    });
    return res;
  }

}
