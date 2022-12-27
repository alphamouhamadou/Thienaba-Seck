import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZayPage } from './zay.page';

const routes: Routes = [
  {
    path: '',
    component: ZayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZayPageRoutingModule {}
