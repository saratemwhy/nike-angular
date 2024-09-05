import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NuoviArriviComponent } from './components/nuovi-arrivi/nuovi-arrivi.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { CalcioComponent } from './components/sport/calcio/calcio.component';
import { RunningComponent } from './components/sport/running/running.component';
import { BasketComponent } from './components/sport/basket/basket.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TuttiProdottiComponent } from './components/tutti-prodotti/tutti-prodotti.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { LoadingPagamentoComponent } from './components/loading-pagamento/loading-pagamento.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'nuovi-arrivi', component: NuoviArriviComponent},
  {path: 'best-seller', component: BestSellerComponent},
  {path: 'calcio', component: CalcioComponent},
  {path: 'running', component: RunningComponent},
  {path: 'basket', component: BasketComponent},
  {path: 'tutti-prodotti', component: TuttiProdottiComponent},
  {path: 'carrello', component: CarrelloComponent},
  {path: 'loading-payment', component: LoadingPagamentoComponent},
  {path: 'thank-you', component: ThankyouComponent},
  {path: ':inputShoes', component: SearchResultsComponent},
  {path: 'dettaglio/:id', component: DettaglioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
