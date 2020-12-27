import { IOCContainer } from '@grupakmk/libstorefront';
import { CustomerPriceDao } from '../dao';
import { CustomerPriceActions } from './customer-price.actions';

export namespace CustomerPriceThunks {
    export const loadCustomerPrices = (customerId: string) => async (dispatch, getState) => {
        const response = await IOCContainer.get(CustomerPriceDao).getCustomerPrices(customerId);
        if (response) {
            const {items} = response.result;
            await dispatch(CustomerPriceActions.setCustomerPrices(items));
            await dispatch(CustomerPriceActions.setLoaded(true));

            return items;
        } else {
            await dispatch(CustomerPriceActions.setLoaded(false));
            return [];
        }
    }
}
