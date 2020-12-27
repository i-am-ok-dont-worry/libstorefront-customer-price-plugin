import { LibstorefrontInnerState } from '@grupakmk/libstorefront';
export declare namespace CustomerPriceThunks {
    const loadCustomerPrices: (customerId: string) => (dispatch: any, getState: () => LibstorefrontInnerState) => Promise<any>;
}
