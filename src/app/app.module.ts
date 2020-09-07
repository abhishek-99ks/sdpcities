import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HyderabadComponent } from './hyderabad/hyderabad.component';
import { BangaloreComponent } from './bangalore/bangalore.component';
import { ChennaiComponent } from './chennai/chennai.component';
import { DelhiComponent } from './delhi/delhi.component';
import { PuneComponent } from './pune/pune.component';

@NgModule({
  declarations: [
    AppComponent,
    HyderabadComponent,
    BangaloreComponent,
    ChennaiComponent,
    DelhiComponent,
    PuneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, BangaloreComponent, ChennaiComponent, DelhiComponent, HyderabadComponent, PuneComponent]
})
export class AppModule { }
