import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NunPage } from './nun.page';

const routes: Routes = [
  {
    path: '',
    component: NunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NunPageRoutingModule {}
