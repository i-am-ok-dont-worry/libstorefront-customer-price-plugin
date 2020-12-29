import { CustomerPrice } from   '../types';
import { AbstractStore, IOCContainer } from '@grupakmk/libstorefront';

export const observeCustomerPrice = (callback?: (customerPrice?: CustomerPrice) => void) => {
    const interval = setInterval(() => {
        const customerPrices = IOCContainer.get(AbstractStore).getState().customerPrices;
        if (customerPrices.loaded) {
            callback(customerPrices.items);
            clearInterval(interval);
            return;
        }
    }, 100);
}
