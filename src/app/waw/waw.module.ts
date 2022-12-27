import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WawPageRoutingModule } from './waw-routing.module';

import { WawPage } from './waw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WawPageRoutingModule
  ],
  declarations: [WawPage]
})
export class WawPageModule {}
