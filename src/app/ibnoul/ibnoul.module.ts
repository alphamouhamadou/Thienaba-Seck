import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IbnoulPageRoutingModule } from './ibnoul-routing.module';

import { IbnoulPage } from './ibnoul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IbnoulPageRoutingModule
  ],
  declarations: [IbnoulPage]
})
export class IbnoulPageModule {}
