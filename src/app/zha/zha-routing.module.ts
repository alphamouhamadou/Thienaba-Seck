import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZhaPage } from './zha.page';

const routes: Routes = [
  {
    path: '',
    component: ZhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZhaPageRoutingModule {}
