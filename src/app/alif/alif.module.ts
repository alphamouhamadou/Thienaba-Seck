import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlifPageRoutingModule } from './alif-routing.module';

import { AlifPage } from './alif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlifPageRoutingModule
  ],
  declarations: [AlifPage]
})
export class AlifPageModule {}
