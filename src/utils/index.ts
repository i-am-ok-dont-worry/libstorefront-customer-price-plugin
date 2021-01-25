import { AbstractStore, IOCContainer } from '@grupakmk/libstorefront';
import { CustomerPriceSelectors } from '../store/customer-price.selectors';

export const observeCustomerPrice = (product: any) => {
    const interval = setInterval(() => {
        const state = IOCContainer.get(AbstractStore).getState();
        const customerPrices = state.customerPrices;
        if (customerPrices.loaded) {
            const price = CustomerPriceSelectors.getCustomerPriceForProduct(product)(state);
            if (price) {
                product.customer_price = price;

                if (product.configurable_children) {
                    product.configurable_children = product.configurable_children.map(cc => ({
                        ...cc,
                        price: price.new_price
                    }));
                }
                clearInterval(interval);
            }
        }
    }, 100);
}
