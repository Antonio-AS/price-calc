import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Supply } from '../models/supply.model';
import * as SupplyActions from '../store/supply.actions';

@Component({
  selector: 'app-supply-form',
  templateUrl: './supply-form.component.html',
  styleUrls: ['./supply-form.component.css']
})
export class SupplyFormComponent implements OnInit {

  model = new Supply();

  constructor(
      private store: Store<{ supply: Supply[] }>,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
    this.getModel();
  }

  onSubmit() {
    this.store.dispatch(new SupplyActions.Insert(this.model));
    this.location.back();
  }

  private getModel(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (!name) { return; }
    let supplies;
    this.store.select('supply')
        .subscribe(value => supplies = value);
    this.model = supplies.find(el => el.name === name) || this.model;
  }
}
