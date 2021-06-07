import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './component';

const routes: Routes = [
  {
    path: '',
    component: SideNavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideBarRoutingModule {}
