import {ProductActions, ProductActionTypes} from './product.actions';

export const initialState = [];

export function productReducer(state = initialState, action: ProductActions) {
    switch (action.type) {
        case ProductActionTypes.Insert:
            state = state.filter((el) => el.name !== action.payload.name);
            return [...state, action.payload].sort((a, b) => a.code > b.code ? 1 : -1);
        case ProductActionTypes.Remove:
            return state.filter((el) => el.name !== action.payload.name);
        case ProductActionTypes.LoadSuccess:
            return action.payload;
        default:
            return state;
    }
}
