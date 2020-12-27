import { CustomerPrice } from '../types';

export const CustomerPriceDefaultState: CustomerPriceModuleState = {
    items: [],
    loaded: false
};

export interface CustomerPriceModuleState {
    items: CustomerPrice[],
    loaded: boolean
}
