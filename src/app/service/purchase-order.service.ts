import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URL_API } from '../app.api';
import { Order } from '../shared/order.model';
@Injectable()
export class PurchaseOrderService {
  constructor(private http: HttpClient) {}

  public makePurchase(order: Order): Observable<number> {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');

    return this.http
      .post(`${URL_API}/pedidos`, order, {
        headers: headers,
      })
      .pipe(map((res: any) => res.id));
  }
}
