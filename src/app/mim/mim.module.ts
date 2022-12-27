import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MimPageRoutingModule } from './mim-routing.module';

import { MimPage } from './mim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MimPageRoutingModule
  ],
  declarations: [MimPage]
})
export class MimPageModule {}
