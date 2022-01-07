import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from 'src/app/service/offers.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [OffersService],
})
export class AddressComponent implements OnInit {
  public address: string = '';

  constructor(
    private route: ActivatedRoute,
    private offerService: OffersService
  ) {}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params: Params) => {
      this.offerService.getAddressById(params.id).then((res: string) => {
        this.address = res;
      });
    });
  }
}
