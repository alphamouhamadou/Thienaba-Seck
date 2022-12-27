import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaPageRoutingModule } from './ta-routing.module';

import { TaPage } from './ta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaPageRoutingModule
  ],
  declarations: [TaPage]
})
export class TaPageModule {}
