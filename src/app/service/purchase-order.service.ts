import { Order } from '../shared/order.model';

export class PurchaseOrderService {
  public makePurchase(order: Order) {
    console.log(order);
  }
}
