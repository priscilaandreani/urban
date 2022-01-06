import { Component, OnInit } from '@angular/core';
import { OffersService } from '../service/offers.service';
import { Offer } from '../shared/offers.model';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
  providers: [OffersService],
})
export class FunComponent implements OnInit {
  public offers: Offer[];

  constructor(private offerService: OffersService) {}

  ngOnInit(): void {
    this.offerService
      .getOffersByCategory('diversao')
      .then((offers: Offer[]) => (this.offers = offers));
  }
}
