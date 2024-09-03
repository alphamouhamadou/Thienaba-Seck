import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZikrPageRoutingModule } from './zikr-routing.module';

import { ZikrPage } from './zikr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZikrPageRoutingModule
  ],
  declarations: [ZikrPage]
})
export class ZikrPageModule {}
