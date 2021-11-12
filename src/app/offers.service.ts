import { HttpClient as Http } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from './shared/offers.model';

@Injectable()
export class OffersService {
  constructor(private http: Http) {}

  public getOffers(): Promise<Offer[]> {
    return this.http
      .get('http://localhost:3000/ofertas?destaques=true')
      .toPromise()
      .then((res: any) => res);
  }

  public getOffersByCategory(category: string): Promise<Offer[]> {
    return this.http
      .get(`http://localhost:3000/ofertas?categoria=${category}`)
      .toPromise()
      .then((res: any) => res);
  }
}
