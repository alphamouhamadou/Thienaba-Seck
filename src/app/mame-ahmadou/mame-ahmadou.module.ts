import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MameAhmadouPageRoutingModule } from './mame-ahmadou-routing.module';

import { MameAhmadouPage } from './mame-ahmadou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MameAhmadouPageRoutingModule
  ],
  declarations: [MameAhmadouPage]
})
export class MameAhmadouPageModule {}
