import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaynPageRoutingModule } from './hayn-routing.module';

import { HaynPage } from './hayn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaynPageRoutingModule
  ],
  declarations: [HaynPage]
})
export class HaynPageModule {}
