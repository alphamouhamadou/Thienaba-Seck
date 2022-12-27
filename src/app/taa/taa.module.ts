import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaaPageRoutingModule } from './taa-routing.module';

import { TaaPage } from './taa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaaPageRoutingModule
  ],
  declarations: [TaaPage]
})
export class TaaPageModule {}
