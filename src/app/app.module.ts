import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Covid19Component } from './components/covid19/covid19.component';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DistrictsComponent } from './components/districts/districts.component';
import { ChartComponent } from './components/chart/chart.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    Covid19Component,
    DistrictsComponent,
    ChartComponent,
  ],
  imports: [
    HttpClientModule,
  
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
