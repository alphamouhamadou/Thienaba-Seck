import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WirdPageRoutingModule } from './wird-routing.module';

import { WirdPage } from './wird.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WirdPageRoutingModule
  ],
  declarations: [WirdPage]
})
export class WirdPageModule {}
