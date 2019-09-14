import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { TradeflowDashboardModule } from './tradeflow-dashboard/tradeflow-dashboard.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  //{ path: 'library', component: LibraryDashboardComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TradeflowDashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
