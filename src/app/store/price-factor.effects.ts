import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PriceFactorService } from '../Services/price-factor.service';
import * as PriceFactorActions from '../store/price-factor.actions';

@Injectable()
export class PriceFactorEffects {

    @Effect()
    loadPriceFactors$ = this.actions$
        .pipe(
            ofType(PriceFactorActions.PriceFactorActionTypes.Load),
            mergeMap(() => this.priceFactorService.getPriceFactor()
                .pipe(
                    map(priceFactors => (new PriceFactorActions.LoadSuccess(priceFactors))),
                    catchError(() => of({ type: '[Price Factor] Loaded Error' }))
                )
            )
        );

    @Effect()
    savePriceFactor$ = this.actions$
        .pipe(
            ofType(PriceFactorActions.PriceFactorActionTypes.Save),
            map((action: PriceFactorActions.Save) => this.priceFactorService.setPriceFactor(action.payload)),
            map(() => ({type: '[Price Factor] Inserted Success'}))
        );

    constructor(
        private actions$: Actions,
        private priceFactorService: PriceFactorService
    ) { }
}
