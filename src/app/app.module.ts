import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { provideHttpClient } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { NuoviArriviComponent } from './components/nuovi-arrivi/nuovi-arrivi.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { CalcioComponent } from './components/sport/calcio/calcio.component';
import { RunningComponent } from './components/sport/running/running.component';
import { BasketComponent } from './components/sport/basket/basket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TuttiProdottiComponent } from './components/tutti-prodotti/tutti-prodotti.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { DatiComponent } from './components/dati/dati.component';
import { DatiPagamentoComponent } from './components/dati-pagamento/dati-pagamento.component';
import { LoadingPagamentoComponent } from './components/loading-pagamento/loading-pagamento.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    NuoviArriviComponent,
    BestSellerComponent,
    CalcioComponent,
    RunningComponent,
    BasketComponent,
    SearchResultsComponent,
    TuttiProdottiComponent,
    DettaglioComponent,
    CarrelloComponent,
    DatiComponent,
    DatiPagamentoComponent,
    LoadingPagamentoComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
