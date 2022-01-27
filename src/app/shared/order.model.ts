import { ItemCart } from '.';

export class Order {
  constructor(
    public address: string,
    public number: string,
    public complement: string,
    public paymentMethod: string,
    public items: Array<ItemCart>
  ) {}
}
