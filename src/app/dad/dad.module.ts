import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadPageRoutingModule } from './dad-routing.module';

import { DadPage } from './dad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadPageRoutingModule
  ],
  declarations: [DadPage]
})
export class DadPageModule {}
