import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NunPageRoutingModule } from './nun-routing.module';

import { NunPage } from './nun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NunPageRoutingModule
  ],
  declarations: [NunPage]
})
export class NunPageModule {}
