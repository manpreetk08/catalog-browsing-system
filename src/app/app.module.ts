import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { components, exports, providers } from './declarations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './application/landing';
@NgModule({
  declarations: components,
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LandingModule],
  exports: exports,
  providers: providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
