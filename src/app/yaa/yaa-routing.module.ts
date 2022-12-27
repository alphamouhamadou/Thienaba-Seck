import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YaaPage } from './yaa.page';

const routes: Routes = [
  {
    path: '',
    component: YaaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YaaPageRoutingModule {}
