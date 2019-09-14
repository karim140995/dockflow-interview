import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TradeflowListComponent } from './components/tradeflow-list/tradeflow-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: TradeflowListComponent
  }
];

@NgModule({
  declarations: [
    TradeflowListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,

  ],
  providers: []
})
export class TradeflowDashboardModule {}
