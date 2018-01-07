import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { StockComponent } from './stock/stock.component';
import { ChartComponent } from './chart/chart.component';

const APP_ROUTES: Route[] = [
  //TODO - THIS MAY CHANGE BASED ON PRINCIPLES???
  {path: 'chart', component: ChartComponent},
  {path: 'exchange', component: ExchangeComponent},
  {path: 'stock', component: StockComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    WelcomeComponent,
    ExchangeComponent,
    StockComponent,
    ChartComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})

export class RoutingModule { }
