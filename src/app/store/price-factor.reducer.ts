import {PriceFactorActions, PriceFactorActionTypes} from './price-factor.actions';

export const initialState = 1.1;

export function priceFactorReducer(state = initialState, action: PriceFactorActions) {
    switch (action.type) {
        case PriceFactorActionTypes.Save:
            return action.payload;
        case PriceFactorActionTypes.LoadSuccess:
            return action.payload;
        default:
            return state;
    }
}
