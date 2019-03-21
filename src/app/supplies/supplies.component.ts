import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Supply } from '../models/supply.model';
import * as SupplyActions from '../store/supply.actions';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  supplies: Observable<Supply[]>;

  constructor(private store: Store<{ supply: Supply[]}>) {
  }

  ngOnInit() {
    this.supplies = this.store.select('supply');
  }

  delete(supply: Supply) {
    this.store.dispatch(new SupplyActions.Remove(supply));
  }

}
