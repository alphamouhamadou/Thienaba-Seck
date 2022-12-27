import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LamalifPage } from './lamalif.page';

const routes: Routes = [
  {
    path: '',
    component: LamalifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LamalifPageRoutingModule {}
