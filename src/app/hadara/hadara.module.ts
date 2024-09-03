import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HadaraPageRoutingModule } from './hadara-routing.module';

import { HadaraPage } from './hadara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HadaraPageRoutingModule
  ],
  declarations: [HadaraPage]
})
export class HadaraPageModule {}
