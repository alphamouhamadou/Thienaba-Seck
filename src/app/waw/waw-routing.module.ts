import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WawPage } from './waw.page';

const routes: Routes = [
  {
    path: '',
    component: WawPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WawPageRoutingModule {}
