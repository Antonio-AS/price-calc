import { Action } from '@ngrx/store';

export enum PriceFactorActionTypes {
    Save = '[Price Factor] Save',
    Load = '[Price Factor] Load',
    LoadSuccess = '[Price Factor] Load Success'
}

export class Save implements Action {
    readonly type = PriceFactorActionTypes.Save;
    constructor(public payload: number) {}
}

export class Load implements Action {
    readonly type = PriceFactorActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = PriceFactorActionTypes.LoadSuccess;
    constructor(public payload: number) {}
}

export type PriceFactorActions = Save | Load | LoadSuccess;
