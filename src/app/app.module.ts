import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { FunComponent } from './fun/fun.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

@NgModule({
  declarations: [AppComponent, TopComponent, MainComponent, FooterComponent, RestaurantesComponent, DiversaoComponent, FunComponent, RestaurantsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
