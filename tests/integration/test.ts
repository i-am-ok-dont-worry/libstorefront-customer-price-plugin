import {LibStorefront, PriceUtils, Product, QueryUtils} from '@grupakmk/libstorefront';
import { CustomerPricePlugin } from "../../src";
import { CustomerPrice, CustomerProduct } from "../../src/types";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        CustomerPricePlugin
    ]
}, 'https://api.meringer.staging.grupakmk.pl');

(async () => {
    // await LSF.UserService.login('joanna.kocur+6@grupakmk.pl', 'Haslodotestowania1!');
    await LSF.UserService.startSession();
    // const prices = LSF.getState();

    const q = QueryUtils.fromKey({ sku: 'Produkt prosty KMK 3' });
    // const response = await LSF.SearchClient.searchByQuery({ query: q });
    const response = await LSF.ProductService.getProduct({ query: q, setCurrentProduct: true });
    // @ts-ignore
    const price = PriceUtils.getCalculatedProductPrice({ ...response, qty: 2 });
    debugger;


    // const p = await LSF.ProductService.getProductByChildSku({ parentSku: '01.01.01', childSku: '01.01.01.01' });
})();

