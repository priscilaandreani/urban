import { Component, OnInit } from '@angular/core';
import { OffersService } from '../service/offers.service';
import { Offer } from '../shared/offers.model';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [OffersService],
})
export class RestaurantsComponent implements OnInit {
  public offers: Offer[];

  constructor(private offerService: OffersService) {}

  ngOnInit(): void {
    this.offerService
      .getOffersByCategory('restaurante')
      .then((offers: Offer[]) => (this.offers = offers));
  }
}
