import { Component, OnInit } from '@angular/core';
import { OffersService } from '../service/offers.service';
import { Offer } from '../shared/offers.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [OffersService],
})
export class MainComponent implements OnInit {
  public offers: Offer[];

  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.offersService
      .getOffers()
      .then((offers: Offer[]) => {
        this.offers = offers;
      })
      .catch((params: any) => console.log(params));
  }
}
