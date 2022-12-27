import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZaPageRoutingModule } from './za-routing.module';

import { ZaPage } from './za.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZaPageRoutingModule
  ],
  declarations: [ZaPage]
})
export class ZaPageModule {}
