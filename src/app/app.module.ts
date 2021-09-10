import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WeatherComponent } from './features/weather/weather.component';
import { UnitsComponent } from './features/units/units.component';
import { IconComponent } from './features/icon/icon.component';

import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { FormsModule } from '@angular/forms';
import { FaviconComponent } from './features/favicon/favicon.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    UnitsComponent,
    IconComponent,
    FaviconComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatButtonModule,
    MatRadioModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
