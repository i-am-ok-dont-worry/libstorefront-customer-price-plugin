import { createSelector } from 'reselect';
import { CustomerPriceModuleState } from "./customer-price.default";

export namespace CustomerPriceSelectors {
    export const getCustomerPriceForProduct = (productId: string|number) => createSelector([(state: any) => state.customerPrices], (cp: CustomerPriceModuleState) => {
        return cp.items.find(({ product_id }) => String(product_id) === String(productId));
    });
}
