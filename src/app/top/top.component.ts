import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OffersService } from '../service/offers.service';
import { Offer } from '../shared/offers.model';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
  providers: [OffersService],
})
export class TopComponent implements OnInit {
  public offers: Observable<Offer[]>;
  public subjectSearch: Subject<string> = new Subject<string>();
  public resultOffers: Offer[];
  constructor(private offerService: OffersService) {}

  ngOnInit(): void {
    (this.offers = this.subjectSearch.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if (term.trim() === '') {
          return of<Offer[]>([]);
        }
        return this.offerService.searchOffer(term);
      })
    )),
      catchError((err: any) => {
        console.log('Erro Subject - catchErro: ', err.status);
        return of<Offer[]>([]);
      });

    this.offers.subscribe((offers: Offer[]) => (this.resultOffers = offers));
  }

  search(_searchValue: string): void {
    this.subjectSearch.next(_searchValue);
  }

  cleanSearch(): void {
    this.subjectSearch.next('');
  }
}
