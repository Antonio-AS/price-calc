import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.getProductsFromStorage());
  }

  setProducts(product: Product): void {
    let products = this.getProductsFromStorage();
    products = products.filter((el) => el.name !== product.name);
    products.push(product);
    products.sort((a, b) => a.code > b.code ? 1 : -1);
    localStorage.setItem('products', JSON.stringify(products));
  }

  deleteProduct(product: Product): void {
    let products = this.getProductsFromStorage();
    products = products.filter((el) => el.name !== product.name);
    localStorage.setItem('products', JSON.stringify(products));
  }

  private getProductsFromStorage(): Product[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }
}
