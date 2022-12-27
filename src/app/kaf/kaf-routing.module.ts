import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KafPage } from './kaf.page';

const routes: Routes = [
  {
    path: '',
    component: KafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KafPageRoutingModule {}
