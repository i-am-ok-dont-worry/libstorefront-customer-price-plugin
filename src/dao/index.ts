import { injectable, inject } from 'inversify';
import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';

@injectable()
export class CustomerPriceDao {

    public getCustomerPrices (customerId: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/customer-price/' + customerId + '?token={{token}}'),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    }

    public constructor (@inject(TaskQueue) private taskQueue: TaskQueue) {}
}
