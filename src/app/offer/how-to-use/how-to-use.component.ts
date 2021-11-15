import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from 'src/app/offers.service';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers: [OffersService],
})
export class HowToUseComponent implements OnInit {
  public howToUseDesc: string = '';

  constructor(
    private route: ActivatedRoute,
    private offerService: OffersService
  ) {}

  ngOnInit(): void {
    this.offerService
      .getHowToUseById(this.route.parent?.snapshot.params['id'])
      .then((res: string) => {
        this.howToUseDesc = res;
      });
  }
}
