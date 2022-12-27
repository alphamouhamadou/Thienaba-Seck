import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JhalPage } from './jhal.page';

const routes: Routes = [
  {
    path: '',
    component: JhalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JhalPageRoutingModule {}
