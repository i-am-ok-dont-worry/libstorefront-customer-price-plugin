import { Task, TaskQueue } from '@grupakmk/libstorefront';
export declare class CustomerPriceDao {
    private taskQueue;
    getCustomerPrices(customerId: string): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
