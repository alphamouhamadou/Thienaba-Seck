import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JhalPageRoutingModule } from './jhal-routing.module';

import { JhalPage } from './jhal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JhalPageRoutingModule
  ],
  declarations: [JhalPage]
})
export class JhalPageModule {}
