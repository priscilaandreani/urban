export class ItemCart {
  constructor(
    public id: number,
    public img: string,
    public title: string,
    public offer_description: string,
    public value: number,
    public quantity: number
  ) {}
}
