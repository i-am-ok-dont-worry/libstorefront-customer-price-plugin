import { LibStorefront, QueryUtils } from '@grupakmk/libstorefront';
import { CustomerPricePlugin } from "../../src";
import { CustomerPrice, CustomerProduct } from "../../src/types";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        CustomerPricePlugin
    ]
}, 'https://api.meringer.staging.grupakmk.pl');

(async () => {
    // await LSF.UserService.login('test@grupakmk.pl', 'Testowe2!');
    await LSF.UserService.startSession();
    const prices = LSF.getState();

    const q = QueryUtils.fromKey({ id: '611' });
    // const response = await LSF.SearchClient.searchByQuery({ query: q });

    const p = await LSF.ProductService.getProductByChildSku({ parentSku: '01.01.01', childSku: '01.01.01.01' });
    debugger;
})();

