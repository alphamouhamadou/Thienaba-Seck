import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IbnouleMouhaibePageRoutingModule } from './ibnoule-mouhaibe-routing.module';

import { IbnouleMouhaibePage } from './ibnoule-mouhaibe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IbnouleMouhaibePageRoutingModule
  ],
  declarations: [IbnouleMouhaibePage]
})
export class IbnouleMouhaibePageModule {}
