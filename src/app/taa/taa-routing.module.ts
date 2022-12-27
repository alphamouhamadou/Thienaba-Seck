import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaaPage } from './taa.page';

const routes: Routes = [
  {
    path: '',
    component: TaaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaaPageRoutingModule {}
