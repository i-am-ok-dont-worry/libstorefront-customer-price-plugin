import { createLibstorefrontModule, Customer, HookType, LibStorefront, Product } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { CustomerPriceDao } from './dao';
import { CustomerPriceService } from './service';
import { customerPriceReducer } from './store/customer-price.reducers';
import { CustomerPriceDefaultState } from './store/customer-price.default';
import { CustomerPriceSelectors } from './store/customer-price.selectors';

/**
 * Plugin provides support for fetching individual customer prices and
 * manipulate product data to extend product with customer prices.
 *
 * Plugin uses AfterProductFetched hook to mutate product object after it
 * was fetched from ES.
 */
export const CustomerPricePlugin = ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<CustomerPriceDao>(CustomerPriceDao).to(CustomerPriceDao);
    libstorefront.getIOCContainer().bind<CustomerPriceService>(CustomerPriceService).to(CustomerPriceService);
    libstorefront.listenTo(HookType.AfterCoreModulesRegistered, (lsf: LibStorefront) => {
        lsf.registerModule(createLibstorefrontModule('customerPrices', customerPriceReducer, CustomerPriceDefaultState));
    });
    libstorefront.listenTo(HookType.UserAuthorized, (customer: Customer) => {
        libstorefront.getIOCContainer().get(CustomerPriceService).getCustomerPrices(customer.id);
    });
    libstorefront.listenTo(HookType.AfterProductFetched, async (product: Product) => {
        const customerPrice = CustomerPriceSelectors.getCustomerPriceForProduct(product.id)(libstorefront.getState());
        if (customerPrice) { Object.assign(product, { customerPrice }); }

        return product;
    });
}) as LibstorefrontPlugin;
