import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThaPage } from './tha.page';

const routes: Routes = [
  {
    path: '',
    component: ThaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThaPageRoutingModule {}
