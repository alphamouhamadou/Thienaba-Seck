import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZhaPageRoutingModule } from './zha-routing.module';

import { ZhaPage } from './zha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZhaPageRoutingModule
  ],
  declarations: [ZhaPage]
})
export class ZhaPageModule {}
