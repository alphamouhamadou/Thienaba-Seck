import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaPage } from './ba.page';

const routes: Routes = [
  {
    path: '',
    component: BaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaPageRoutingModule {}
