import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { OfferComponent } from './offer/offer.component';
import { HowToUseComponent } from './offer/how-to-use/how-to-use.component';
import { AddressComponent } from './offer/address/address.component';
import { ShortDescription } from './utils/short-description.pipe';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrderSuccessComponent } from './purchase-order-success/purchase-order-success.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    MainComponent,
    FooterComponent,
    FunComponent,
    RestaurantsComponent,
    OfferComponent,
    HowToUseComponent,
    AddressComponent,
    ShortDescription,
    PurchaseOrderComponent,
    PurchaseOrderSuccessComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

registerLocaleData(localePt);
