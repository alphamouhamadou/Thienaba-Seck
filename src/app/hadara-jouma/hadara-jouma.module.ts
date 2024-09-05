import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HadaraJoumaPageRoutingModule } from './hadara-jouma-routing.module';

import { HadaraJoumaPage } from './hadara-jouma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HadaraJoumaPageRoutingModule
  ],
  declarations: [HadaraJoumaPage]
})
export class HadaraJoumaPageModule {}
