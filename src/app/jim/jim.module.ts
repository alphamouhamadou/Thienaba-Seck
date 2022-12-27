import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JimPageRoutingModule } from './jim-routing.module';

import { JimPage } from './jim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JimPageRoutingModule
  ],
  declarations: [JimPage]
})
export class JimPageModule {}
