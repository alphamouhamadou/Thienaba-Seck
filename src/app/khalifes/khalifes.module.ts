import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhalifesPageRoutingModule } from './khalifes-routing.module';

import { KhalifesPage } from './khalifes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhalifesPageRoutingModule
  ],
  declarations: [KhalifesPage]
})
export class KhalifesPageModule {}
