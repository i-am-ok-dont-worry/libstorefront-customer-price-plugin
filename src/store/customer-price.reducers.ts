import { Reducer } from '@grupakmk/libstorefront/dist/src/state-management/types/reducer';
import { AnyAction } from '@grupakmk/libstorefront/dist/src/state-management/types/action';
import { CustomerPriceDefaultState, CustomerPriceModuleState } from './customer-price.default';
import { CustomerPriceActions } from './customer-price.actions';

export const customerPriceReducer: Reducer<CustomerPriceModuleState, AnyAction> = (state = CustomerPriceDefaultState, action) => {
    switch (action.type) {
        case CustomerPriceActions.SET_CUSTOMER_PRICES: {
            return { ...state, items: action.payload || [] };
        }
        case CustomerPriceActions.SET_CUSTOMER_PRICES_LOADED: {
            return { ...state, loaded: action.payload };
        }
        default: return state || CustomerPriceDefaultState;
    }
}
