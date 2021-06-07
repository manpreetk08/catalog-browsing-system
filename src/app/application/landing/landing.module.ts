import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components, providers, exports } from './declarations';
import { LandingRoutingModule } from './landing-routing.module';
import { SideBarModule } from '../side-bar';
import { DashboardModule } from '../dashboard';

@NgModule({
  declarations: components,
  imports: [CommonModule, LandingRoutingModule, SideBarModule, DashboardModule],
  exports: exports,
  providers: providers,
})
export class LandingModule {}
