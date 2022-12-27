import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HahPage } from './hah.page';

const routes: Routes = [
  {
    path: '',
    component: HahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HahPageRoutingModule {}
