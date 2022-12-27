import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YaaPageRoutingModule } from './yaa-routing.module';

import { YaaPage } from './yaa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YaaPageRoutingModule
  ],
  declarations: [YaaPage]
})
export class YaaPageModule {}
