import { Action } from '@ngrx/store';

import { Supply } from '../models/supply.model';

export enum SupplyActionTypes {
    Insert = '[Supply] Insert',
    Remove = '[Supply] Remove',
    Load = '[Supply] Load',
    LoadSuccess = '[Supply] Load Success'
}

export class Insert implements Action {
    readonly type = SupplyActionTypes.Insert;
    constructor(public payload: Supply) {}
}

export class Remove implements Action {
    readonly type = SupplyActionTypes.Remove;
    constructor(public payload: Supply) {}
}

export class Load implements Action {
    readonly type = SupplyActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = SupplyActionTypes.LoadSuccess;
    constructor(public payload: Supply[]) {}
}

export type SupplyActions = Insert | Remove | Load | LoadSuccess;
