import { LibStorefront } from '@grupakmk/libstorefront';
/**
 * Plugin provides support for fetching individual customer prices and
 * manipulate product data to extend product with customer prices.
 *
 * Plugin uses AfterProductFetched hook to mutate product object after it
 * was fetched from ES.
 */
export declare const CustomerPricePlugin: (libstorefront: LibStorefront) => void;
