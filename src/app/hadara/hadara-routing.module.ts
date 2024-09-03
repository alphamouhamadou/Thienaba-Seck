import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HadaraPage } from './hadara.page';

const routes: Routes = [
  {
    path: '',
    component: HadaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HadaraPageRoutingModule {}
