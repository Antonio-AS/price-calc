import {SupplyActions, SupplyActionTypes} from './supply.actions';

export const initialState = [];

export function supplyReducer(state = initialState, action: SupplyActions) {
    switch (action.type) {
        case SupplyActionTypes.Insert:
            state = state.filter((el) => el.name !== action.payload.name);
            return [...state, action.payload].sort((a, b) => a.name > b.name ? 1 : -1);
        case SupplyActionTypes.Remove:
            return state.filter((el) => el.name !== action.payload.name);
        case SupplyActionTypes.LoadSuccess:
            return action.payload;
        default:
            return state;
    }
}
