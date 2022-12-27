import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MimPage } from './mim.page';

const routes: Routes = [
  {
    path: '',
    component: MimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MimPageRoutingModule {}
