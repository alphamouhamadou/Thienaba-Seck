import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GhaynPage } from './ghayn.page';

const routes: Routes = [
  {
    path: '',
    component: GhaynPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GhaynPageRoutingModule {}
