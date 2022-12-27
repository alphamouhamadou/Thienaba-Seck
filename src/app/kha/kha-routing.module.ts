import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhaPage } from './kha.page';

const routes: Routes = [
  {
    path: '',
    component: KhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhaPageRoutingModule {}
