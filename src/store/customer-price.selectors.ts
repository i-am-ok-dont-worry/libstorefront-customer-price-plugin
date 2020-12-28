import { createSelector } from 'reselect';
import { CustomerPriceModuleState } from './customer-price.default';
import { Product } from '@grupakmk/libstorefront';

export namespace CustomerPriceSelectors {
    export const getCustomerPriceForProduct = (product: Product) => createSelector([(state: any) => state.customerPrices], (cp: CustomerPriceModuleState) => {
        return cp.items.find(({ product_id }) => {
            const isEqual = String(product_id) === String(product.id) || String(product_id) === String(product.parentId);
            return isEqual;
        });
    });
}
