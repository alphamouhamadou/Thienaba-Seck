import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
Articles : any[];
  constructor(public navCtrl: NavController) {
    this.Articles = [
      {}
    ]
  }
}
