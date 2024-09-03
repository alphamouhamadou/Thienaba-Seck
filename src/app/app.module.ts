import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';

import { Vibration } from '@ionic-native/vibration/ngx';  // Importation du service Vibration

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 
import { HomePage } from './home/home.page';
import { AlifPage } from './alif/alif.page';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Vibration  // Ajout du service Vibration ici
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
