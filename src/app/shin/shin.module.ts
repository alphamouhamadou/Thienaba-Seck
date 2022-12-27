import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShinPageRoutingModule } from './shin-routing.module';

import { ShinPage } from './shin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShinPageRoutingModule
  ],
  declarations: [ShinPage]
})
export class ShinPageModule {}
