import { LibStorefront } from '@grupakmk/libstorefront';
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
    console.warn('Prices: ', prices);
})();
