import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GhaynPageRoutingModule } from './ghayn-routing.module';

import { GhaynPage } from './ghayn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GhaynPageRoutingModule
  ],
  declarations: [GhaynPage]
})
export class GhaynPageModule {}
