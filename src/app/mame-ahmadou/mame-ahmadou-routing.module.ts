import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MameAhmadouPage } from './mame-ahmadou.page';

const routes: Routes = [
  {
    path: '',
    component: MameAhmadouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MameAhmadouPageRoutingModule {}
