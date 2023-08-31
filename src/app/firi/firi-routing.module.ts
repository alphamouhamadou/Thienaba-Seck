import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiriPage } from './firi.page';

const routes: Routes = [
  {
    path: '',
    component: FiriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiriPageRoutingModule {}
