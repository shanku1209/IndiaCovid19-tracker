import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { Covid19Component } from './components/covid19/covid19.component';
import { DistrictsComponent } from './components/districts/districts.component';

const routes: Routes = [
  {path:'', component:Covid19Component},
  {path:'districts/:id', component:DistrictsComponent},
  {path:'charts/:id', component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
