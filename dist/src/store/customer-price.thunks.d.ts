import { LibstorefrontInnerState } from '@grupakmk/libstorefront';
import { CustomerPrice } from '../types';
export declare namespace CustomerPriceThunks {
    const loadCustomerPrices: (customerId: string) => (dispatch: any, getState: () => LibstorefrontInnerState) => Promise<any>;
    const updateProductProps: (items: CustomerPrice[]) => (dispatch: any, getState: any) => Promise<void>;
}
