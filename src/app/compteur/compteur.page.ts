import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Howl } from 'howler';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.page.html',
  styleUrls: ['./compteur.page.scss'], 
})
export class CompteurPage {
  counter = 0;
  isVibrationEnabled = false;
  isSoundEnabled = false;
  sound: Howl;

  constructor(private vibration: Vibration) {
    // Configuration du son
    this.sound = new Howl({
      src: ['assets/click_sound.mp3'],  // Assurez-vous que le chemin est correct
    });
  }

  incrementCounter() {
    this.counter++;
    
    if (this.isVibrationEnabled) {
      this.vibration.vibrate(100);  // Fait vibrer l'appareil pendant 100ms
    }
    
    if (this.isSoundEnabled) {
      this.sound.play();  // Joue le son
    }
  }

  resetCounter() {
    this.counter = 0;  // Réinitialise le compteur
  }

  toggleVibration() {
    this.isVibrationEnabled = !this.isVibrationEnabled;  // Active ou désactive la vibration
  }

  toggleSound() {
    this.isSoundEnabled = !this.isSoundEnabled;  // Active ou désactive le son
  }
}
