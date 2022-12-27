import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaPageRoutingModule } from './ha-routing.module';

import { HaPage } from './ha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaPageRoutingModule
  ],
  declarations: [HaPage]
})
export class HaPageModule {}
