import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DalPage } from './dal.page';

const routes: Routes = [
  {
    path: '',
    component: DalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DalPageRoutingModule {}
