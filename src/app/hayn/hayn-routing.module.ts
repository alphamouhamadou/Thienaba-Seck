import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaynPage } from './hayn.page';

const routes: Routes = [
  {
    path: '',
    component: HaynPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaynPageRoutingModule {}
