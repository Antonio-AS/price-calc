import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { SupplyService } from '../Services/supply.service';
import * as SupplyActions from '../store/supply.actions';

@Injectable()
export class SupplyEffects {

    @Effect()
    loadSupplies$ = this.actions$
        .pipe(
            ofType('[Supply] Load'),
            mergeMap(() => this.supplyService.getSupplies()
                .pipe(
                    map(supplies => ({type: '[Supply] Load Success', payload: supplies})),
                    catchError(() => of({ type: '[Supply] Loaded Error' }))
                )
            )
        );

    @Effect()
    saveSupply$ = this.actions$
        .pipe(
            ofType('[Supply] Insert'),
            // map((action: Insert) => ({type: '[Supply] Insert', payload: action.payload})),
            map((action: SupplyActions.Insert) => this.supplyService.setSupplies(action.payload)
                // .pipe(
                //     map(() => ({type: '[Supply] Set Success'})),
                //     catchError(() => of({ type: '[Supply] Set Error' }))
                // )
            ),
            map(() => ({type: '[Supply] Inserted Success'}))
            // map(supplies => this.supplyService.setSupplies([new Supply()])),
            // switchMap(() => this.supplyService.getSupplies()
            //     .pipe(
            //         map(supplies => ({type: '[Supply] Insert', payload: supplies}))
            //     )
            // )
        );

    @Effect()
    deleteSupply$ = this.actions$
        .pipe(
            ofType(SupplyActions.SupplyActionTypes.Remove),
            map((action: SupplyActions.Remove) => this.supplyService.deleteSupply(action.payload)),
            map(() => ({type: '[Supply] Deleted Success'}))
        );

    constructor(
        private actions$: Actions,
        private supplyService: SupplyService
    ) { }
}
