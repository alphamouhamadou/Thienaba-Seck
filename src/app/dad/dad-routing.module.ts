import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadPage } from './dad.page';

const routes: Routes = [
  {
    path: '',
    component: DadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadPageRoutingModule {}
