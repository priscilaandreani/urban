import { Offer } from '../shared';
import { ItemCart } from '../shared/item-cart.model';

export class CartService {
  public items: ItemCart[] = [];

  public showItems(): ItemCart[] {
    return this.items;
  }

  public addItem(offer: Offer): void {
    let itemCart: ItemCart = new ItemCart(
      offer.id,
      offer.imagens[0].url,
      offer.titulo,
      offer.descricao_oferta,
      offer.valor,
      1
    );

    let itemCardFind = this.items.find(
      (item: ItemCart) => item.id === itemCart.id
    );

    if (itemCardFind) {
      itemCardFind.quantity += 1;
    } else {
      this.items.push(itemCart);
    }
  }

  public totalCart(): number {
    let total: number = 0;

    this.items.map((item: ItemCart) => {
      total = total + item.value * item.quantity;
    });

    return total;
  }

  public addQuantity(itemCart: ItemCart) {
    let itemCardFind = this.items.find(
      (item: ItemCart) => item.id === itemCart.id
    );

    if (itemCardFind) {
      itemCardFind.quantity += 1;
    }
  }

  public removeQuantity(itemCart: ItemCart) {
    let itemCardFind = this.items.find(
      (item: ItemCart) => item.id === itemCart.id
    );

    if (itemCardFind) {
      itemCardFind.quantity -= 1;

      if (itemCardFind.quantity === 0) {
        this.items.splice(this.items.indexOf(itemCardFind), 1);
      }
    }
  }
}
