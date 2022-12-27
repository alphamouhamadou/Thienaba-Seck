import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThaPageRoutingModule } from './tha-routing.module';

import { ThaPage } from './tha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThaPageRoutingModule
  ],
  declarations: [ThaPage]
})
export class ThaPageModule {}
