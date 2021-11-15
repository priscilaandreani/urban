import { Routes } from '@angular/router';
import { FunComponent } from './fun/fun.component';
import { MainComponent } from './main/main.component';
import { OfferComponent } from './offer/offer.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'restaurantes', component: RestaurantsComponent },
  { path: 'diversao', component: FunComponent },
  { path: 'ofertas', component: MainComponent },
  { path: 'ofertas/:id', component: OfferComponent },
];
