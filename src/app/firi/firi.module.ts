import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiriPageRoutingModule } from './firi-routing.module';

import { FiriPage } from './firi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiriPageRoutingModule
  ],
  declarations: [FiriPage]
})
export class FiriPageModule {}
