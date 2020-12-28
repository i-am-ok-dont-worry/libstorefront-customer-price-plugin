import { Product } from '@grupakmk/libstorefront';
export declare namespace CustomerPriceSelectors {
    const getCustomerPriceForProduct: (product: Product) => import("reselect").OutputSelector<any, import("../types").CustomerPrice, (res: any) => import("../types").CustomerPrice>;
}
