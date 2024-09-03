import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompteurPageRoutingModule } from './compteur-routing.module';

import { CompteurPage } from './compteur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompteurPageRoutingModule
  ],
  declarations: [CompteurPage]
})
export class CompteurPageModule {}
