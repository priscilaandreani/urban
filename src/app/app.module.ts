import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
