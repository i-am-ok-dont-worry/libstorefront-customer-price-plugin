import {LibStorefront, QueryUtils} from '@grupakmk/libstorefront';
import { CustomerPricePlugin } from "../../src";

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        CustomerPricePlugin
    ]
}, 'https://api.meringer.staging.grupakmk.pl');

(async () => {
    await LSF.UserService.login('test@grupakmk.pl', 'Testowe2!');
    const prices = LSF.getState();

    setTimeout(async () => {
        const q = QueryUtils.fromKey({ id: '611' });
        const response = await LSF.SearchClient.searchByQuery({ query: q });
        debugger;
    }, 2000);
})();
