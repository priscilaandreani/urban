import { Routes } from '@angular/router';
import { FunComponent } from './fun/fun.component';
import { MainComponent } from './main/main.component';
import { AddressComponent } from './offer/address/address.component';
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component';
import { OfferComponent } from './offer/offer.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

export const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'restaurantes', component: RestaurantsComponent },
  { path: 'diversao', component: FunComponent },
  { path: 'ofertas', component: MainComponent },
  {
    path: 'ofertas/:id',
    component: OfferComponent,
    children: [
      { path: '', component: HowToUseComponent },
      {
        path: 'como-utilizar',
        component: HowToUseComponent,
      },
      { path: 'endereco', component: AddressComponent },
    ],
  },
  { path: 'ordem-compra', component: PurchaseOrderComponent },
];
