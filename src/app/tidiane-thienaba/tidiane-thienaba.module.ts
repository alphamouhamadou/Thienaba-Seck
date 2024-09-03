import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TidianeThienabaPageRoutingModule } from './tidiane-thienaba-routing.module';

import { TidianeThienabaPage } from './tidiane-thienaba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TidianeThienabaPageRoutingModule
  ],
  declarations: [TidianeThienabaPage]
})
export class TidianeThienabaPageModule {}
