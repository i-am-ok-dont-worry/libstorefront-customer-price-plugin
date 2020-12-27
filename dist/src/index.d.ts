import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
/**
 * Plugin provides support for fetching individual customer prices and
 * manipulate product data to extend product with customer prices.
 *
 * Plugin uses AfterProductFetched hook to mutate product object after it
 * was fetched from ES.
 */
export declare const CustomerPricePlugin: LibstorefrontPlugin;
