import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaPageRoutingModule } from './ba-routing.module';

import { BaPage } from './ba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaPageRoutingModule
  ],
  declarations: [BaPage]
})
export class BaPageModule {}
