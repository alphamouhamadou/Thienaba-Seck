import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeuPageRoutingModule } from './heu-routing.module';

import { HeuPage } from './heu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeuPageRoutingModule
  ],
  declarations: [HeuPage]
})
export class HeuPageModule {}
