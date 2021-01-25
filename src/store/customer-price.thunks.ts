import { IOCContainer, LibstorefrontInnerState, Logger } from '@grupakmk/libstorefront';
import { CustomerPriceDao } from '../dao';
import { CustomerPriceActions } from './customer-price.actions';
import { CustomerPrice } from '../types';

export namespace CustomerPriceThunks {
    export const loadCustomerPrices = (customerId: string) => async (dispatch, getState: () => LibstorefrontInnerState) => {
        await dispatch(CustomerPriceActions.setLoaded(false));
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

            if (items && items.length) { await dispatch(updateProductProps(items)); }

            return items;
        } else {
            await dispatch(CustomerPriceActions.setLoaded(true));
            return [];
        }
    };

    export const updateProductProps = (items: CustomerPrice[]) => async (dispatch, getState) => {
      try {
          for (let item of items) {
              const action = {
                  type: 'product/UPDATE_PRODUCT_PROPS',
                  payload: { product: { id: item.product_id, customer_price: item } }
              };

              await dispatch(action);
          }
      } catch (e) {}
    };
}
