import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DalPageRoutingModule } from './dal-routing.module';

import { DalPage } from './dal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DalPageRoutingModule
  ],
  declarations: [DalPage]
})
export class DalPageModule {}
