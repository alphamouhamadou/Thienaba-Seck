import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HahPageRoutingModule } from './hah-routing.module';

import { HahPage } from './hah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HahPageRoutingModule
  ],
  declarations: [HahPage]
})
export class HahPageModule {}
