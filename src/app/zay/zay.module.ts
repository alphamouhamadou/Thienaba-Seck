import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZayPageRoutingModule } from './zay-routing.module';

import { ZayPage } from './zay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZayPageRoutingModule
  ],
  declarations: [ZayPage]
})
export class ZayPageModule {}
