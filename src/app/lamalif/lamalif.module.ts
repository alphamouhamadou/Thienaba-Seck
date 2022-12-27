import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LamalifPageRoutingModule } from './lamalif-routing.module';

import { LamalifPage } from './lamalif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LamalifPageRoutingModule
  ],
  declarations: [LamalifPage]
})
export class LamalifPageModule {}
