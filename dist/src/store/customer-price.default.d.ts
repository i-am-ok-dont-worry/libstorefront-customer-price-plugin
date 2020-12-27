import { CustomerPrice } from '../types';
export declare const CustomerPriceDefaultState: CustomerPriceModuleState;
export interface CustomerPriceModuleState {
    items: CustomerPrice[];
    loaded: boolean;
}
