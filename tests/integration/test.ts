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
    // await LSF.UserService.login('joanna.kocur@grupakmk.pl', 'Haslodotestowania3!');
    await LSF.UserService.startSession();
    // const prices = LSF.getState();

    const q = QueryUtils.fromKey({ sku: '00.00.00' });
    const response = await LSF.SearchClient.searchByQuery({ query: q });
    // @ts-ignore
    const price = PriceUtils.getCalculatedProductPrice({ ...response.items[0], qty: 2 });
    debugger;


    // const p = await LSF.ProductService.getProductByChildSku({ parentSku: '01.01.01', childSku: '01.01.01.01' });
})();

