import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AhmadouPageRoutingModule } from './ahmadou-routing.module';

import { AhmadouPage } from './ahmadou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AhmadouPageRoutingModule
  ],
  declarations: [AhmadouPage]
})
export class AhmadouPageModule {}
