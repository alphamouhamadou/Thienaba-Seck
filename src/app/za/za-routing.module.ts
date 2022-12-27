import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZaPage } from './za.page';

const routes: Routes = [
  {
    path: '',
    component: ZaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZaPageRoutingModule {}
