import { HttpClient as Http } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from './shared/offers.model';

import { URL_API } from './app.api';
@Injectable()
export class OffersService {
  constructor(private http: Http) {}

  public getOffers(): Promise<Offer[]> {
    return this.http
      .get(`${URL_API}/ofertas?destaques=true`)
      .toPromise()
      .then((res: any) => res);
  }

  public getOffersByCategory(category: string): Promise<Offer[]> {
    return this.http
      .get(`${URL_API}/ofertas?categoria=${category}`)
      .toPromise()
      .then((res: any) => res);
  }

  public getOfferById(id: number): Promise<Offer> {
    return this.http
      .get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((res: any) => res.shift());
  }

  public getHowToUseById(id: number): Promise<string> {
    return this.http
      .get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((res: any) => res[0].descricao);
  }

  public getAddressById(id: number): Promise<string> {
    return this.http
      .get(`${URL_API}/endereco?id=${id}`)
      .toPromise()
      .then((res: any) => res[0].descricao);
  }
}
