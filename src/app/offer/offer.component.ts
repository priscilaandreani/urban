import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from '../service/offers.service';
import { Offer } from '../shared/offers.model';

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
    private offerService: OffersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.offerService
        .getOfferById(params.id)
        .then((offer: Offer) => (this.offer = offer));
    });
  }
}
