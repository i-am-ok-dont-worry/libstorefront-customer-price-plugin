import { CustomerPrice } from '../types';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
export declare class CustomerPriceService {
    store: AbstractStore<LibstorefrontInnerState>;
    getCustomerPrices(customerId: string): Promise<CustomerPrice[]>;
    constructor(store: AbstractStore<LibstorefrontInnerState>);
}
