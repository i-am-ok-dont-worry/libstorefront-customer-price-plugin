import { IOCContainer, LibstorefrontInnerState, Logger } from '@grupakmk/libstorefront';
import { CustomerPriceDao } from '../dao';
import { CustomerPriceActions } from './customer-price.actions';

export namespace CustomerPriceThunks {
    export const loadCustomerPrices = (customerId: string) => async (dispatch, getState: () => LibstorefrontInnerState) => {
        const userToken = getState().user.token;
        if (!userToken) {
            Logger.info(`Cannot fetch customer prices. User token is missing or invalid`);
            return [];
        }

        const response = await IOCContainer.get(CustomerPriceDao).getCustomerPrices(customerId, userToken);
        if (response) {
            const items = response.result;
            await dispatch(CustomerPriceActions.setCustomerPrices(items));
            await dispatch(CustomerPriceActions.setLoaded(true));

            return items;
        } else {
            await dispatch(CustomerPriceActions.setLoaded(false));
            return [];
        }
    }
}
