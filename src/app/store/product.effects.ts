import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ProductService } from '../Services/product.service';
import * as ProductActions from '../store/product.actions';

@Injectable()
export class ProductEffects {

    @Effect()
    loadProducts$ = this.actions$
        .pipe(
            ofType('[Product] Load'),
            mergeMap(() => this.productService.getProducts()
                .pipe(
                    map(products => ({type: '[Product] Load Success', payload: products})),
                    catchError(() => of({ type: '[Product] Loaded Error' }))
                )
            )
        );

    @Effect()
    saveProduct$ = this.actions$
        .pipe(
            ofType('[Product] Insert'),
            map((action: ProductActions.Insert) => this.productService.setProducts(action.payload)),
            map(() => ({type: '[Product] Inserted Success'}))
        );

    @Effect()
    deleteProduct$ = this.actions$
        .pipe(
            ofType(ProductActions.ProductActionTypes.Remove),
            map((action: ProductActions.Remove) => this.productService.deleteProduct(action.payload)),
            map(() => ({type: '[Product] Deleted Success'}))
        );

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }
}
