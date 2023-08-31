import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IbnoulPage } from './ibnoul.page';

const routes: Routes = [
  {
    path: '',
    component: IbnoulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbnoulPageRoutingModule {}
