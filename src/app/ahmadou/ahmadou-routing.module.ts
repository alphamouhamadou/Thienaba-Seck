import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AhmadouPage } from './ahmadou.page';

const routes: Routes = [
  {
    path: '',
    component: AhmadouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AhmadouPageRoutingModule {}
