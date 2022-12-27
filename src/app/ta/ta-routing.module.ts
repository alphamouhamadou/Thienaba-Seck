import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaPage } from './ta.page';

const routes: Routes = [
  {
    path: '',
    component: TaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaPageRoutingModule {}
