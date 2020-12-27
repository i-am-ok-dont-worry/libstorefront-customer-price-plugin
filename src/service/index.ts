import { inject, injectable } from 'inversify';
import { CustomerPrice } from '../types';
import { AbstractStore, LibstorefrontInnerState } from '@grupakmk/libstorefront';
import { CustomerPriceThunks } from '../store/customer-price.thunks';

@injectable()
export class CustomerPriceService {

    public async getCustomerPrices (customerId: string): Promise<CustomerPrice[]> {
        return this.store.dispatch(CustomerPriceThunks.loadCustomerPrices(customerId));
    }

    public constructor (@inject(AbstractStore) public store: AbstractStore<LibstorefrontInnerState>) {}
}
