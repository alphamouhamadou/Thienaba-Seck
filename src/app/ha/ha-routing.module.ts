import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaPage } from './ha.page';

const routes: Routes = [
  {
    path: '',
    component: HaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaPageRoutingModule {}
