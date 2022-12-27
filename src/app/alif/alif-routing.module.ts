import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlifPage } from './alif.page';

const routes: Routes = [
  {
    path: '',
    component: AlifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlifPageRoutingModule {}
