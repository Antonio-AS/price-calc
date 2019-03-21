import { Action } from '@ngrx/store';

import { Product } from '../models/product.model';

export enum ProductActionTypes {
    Insert = '[Product] Insert',
    Remove = '[Product] Remove',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success'
}

export class Insert implements Action {
    readonly type = ProductActionTypes.Insert;
    constructor(public payload: Product) {}
}

export class Remove implements Action {
    readonly type = ProductActionTypes.Remove;
    constructor(public payload: Product) {}
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
    constructor(public payload: Product[]) {}
}

export type ProductActions = Insert | Remove | Load | LoadSuccess;
