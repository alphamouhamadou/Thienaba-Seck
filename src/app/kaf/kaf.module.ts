import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KafPageRoutingModule } from './kaf-routing.module';

import { KafPage } from './kaf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KafPageRoutingModule
  ],
  declarations: [KafPage]
})
export class KafPageModule {}
