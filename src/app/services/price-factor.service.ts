import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceFactorService {

  constructor() { }

  getPriceFactor(): Observable<number> {
    return of(+localStorage.getItem('priceFactor') || 1.1);
  }

  setPriceFactor(price: number): void {
    localStorage.setItem('priceFactor', price + '');
  }
}
