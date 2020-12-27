import { CustomerPrice } from '../types';
export declare namespace CustomerPriceActions {
    const SN_CUSTOMER_PRICE = "customer_prices";
    const SET_CUSTOMER_PRICES: string;
    const setCustomerPrices: (customerPrices: CustomerPrice[]) => {
        type: string;
        payload: CustomerPrice[];
    };
    const SET_CUSTOMER_PRICES_LOADED: string;
    const setLoaded: (loaded: boolean) => {
        type: string;
        payload: boolean;
    };
}
