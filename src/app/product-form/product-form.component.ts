import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { Supply } from '../models/supply.model';
import * as ProductActions from '../store/product.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  model: Product = new Product();
  supplies: Observable<Supply[]>;

  constructor(
      private store: Store<{ product: Product[], supply: Supply[] }>,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
    this.getModel();
    this.getSupplies();
  }

  onSubmit() {
    this.model.supplies.sort((a, b) => a[0] > b[0] ? 1 : -1);
    this.store.dispatch(new ProductActions.Insert(this.model));
    this.location.back();
  }

  addSupply() {
    this.model.supplies.push(['', 0]);
  }

  deleteSupply(modelSupply: [string, number]) {
    const index: number = this.model.supplies.indexOf(modelSupply);
    if (index !== -1) {
      this.model.supplies.splice(index, 1);
    }
  }

  private getModel(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (!name) { return; }
    let products;
    this.store.select('product')
        .subscribe(value => products = value);
    this.model = products.find(el => el.name === name) || this.model;
  }

  private getSupplies() {
    this.supplies = this.store.select('supply');
  }
}
