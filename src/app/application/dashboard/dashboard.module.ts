import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components, providers, exports } from './declarations';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: components,
  imports: [CommonModule, DashboardRoutingModule],
  exports: exports,
  providers: providers,
})
export class DashboardModule {}
