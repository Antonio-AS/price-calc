import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Supply } from '../models/supply.model';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor() { }

  getSupplies(): Observable<Supply[]> {
    return of(this.getSuppliesFromStorage());
  }

  setSupplies(supply: Supply): void {
    let supplies = this.getSuppliesFromStorage();
    supplies = supplies.filter((el) => el.name !== supply.name);
    supplies.push(supply);
    supplies.sort((a, b) => a.name > b.name ? 1 : -1);
    localStorage.setItem('supplies', JSON.stringify(supplies));
  }

  deleteSupply(supply: Supply): void {
    let supplies = this.getSuppliesFromStorage();
    supplies = supplies.filter((el) => el.name !== supply.name);
    localStorage.setItem('supplies', JSON.stringify(supplies));
  }

  private getSuppliesFromStorage(): Supply[] {
    return JSON.parse(localStorage.getItem('supplies') || '[]');
  }
}
