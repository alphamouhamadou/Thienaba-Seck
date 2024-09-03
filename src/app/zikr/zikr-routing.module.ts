import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZikrPage } from './zikr.page';

const routes: Routes = [
  {
    path: '',
    component: ZikrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZikrPageRoutingModule {}
