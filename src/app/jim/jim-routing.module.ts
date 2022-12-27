import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JimPage } from './jim.page';

const routes: Routes = [
  {
    path: '',
    component: JimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JimPageRoutingModule {}
