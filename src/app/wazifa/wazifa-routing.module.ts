import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WazifaPage } from './wazifa.page';

const routes: Routes = [
  {
    path: '',
    component: WazifaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WazifaPageRoutingModule {}
