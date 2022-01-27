import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService, CartService } from '../service';
import { Offer, ItemCart } from '../shared';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [OffersService],
})
export class OfferComponent implements OnInit {
  public offer: Offer;
  constructor(
    private route: ActivatedRoute,
    private offerService: OffersService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.offerService
        .getOfferById(params.id)
        .then((offer: Offer) => (this.offer = offer));
    });

    console.log(this.cartService.showItems());
  }

  public addItemToCart(): void {
    this.cartService.addItem(this.offer);
  }
}
