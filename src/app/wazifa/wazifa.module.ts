import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WazifaPageRoutingModule } from './wazifa-routing.module';

import { WazifaPage } from './wazifa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WazifaPageRoutingModule
  ],
  declarations: [WazifaPage]
})
export class WazifaPageModule {}
