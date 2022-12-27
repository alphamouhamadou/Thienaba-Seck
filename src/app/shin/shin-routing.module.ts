import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShinPage } from './shin.page';

const routes: Routes = [
  {
    path: '',
    component: ShinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShinPageRoutingModule {}
