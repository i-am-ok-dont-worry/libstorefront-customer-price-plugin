import { Product } from '@grupakmk/libstorefront';
export interface CustomerPrice {
    customerprice_id: number;
    customer_id: number;
    customer_name: string;
    customer_email: string;
    product_id: number;
    product_name: string;
    price: number;
    log_price: number;
    new_price: number;
    qty: number;
    offer_id: number;
}
export declare type CustomerProduct = Product & {
    customer_price: CustomerPrice;
    priceObserver?: (callback: (customerPrice: CustomerPrice) => void) => void;
};
