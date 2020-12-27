import { CustomerPrice } from '../types';

export namespace CustomerPriceActions {
    export const SN_CUSTOMER_PRICE = 'customer_prices';

    export const SET_CUSTOMER_PRICES = SN_CUSTOMER_PRICE + '/SET_CUSTOMER_PRICES';
    export const setCustomerPrices = (customerPrices: CustomerPrice[]) => ({
        type: SET_CUSTOMER_PRICES,
        payload: customerPrices
    });

    export const SET_CUSTOMER_PRICES_LOADED = SN_CUSTOMER_PRICE + '/LOADED';
    export const setLoaded = (loaded: boolean) => ({
       type: SET_CUSTOMER_PRICES_LOADED,
       payload: loaded
    });
}
