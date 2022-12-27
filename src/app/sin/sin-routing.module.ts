import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinPage } from './sin.page';

const routes: Routes = [
  {
    path: '',
    component: SinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinPageRoutingModule {}
