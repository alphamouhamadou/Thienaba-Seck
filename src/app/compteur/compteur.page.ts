import { Component } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Howl, Howler } from 'howler';

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
    // Correct configuration of the sound object
    this.sound = new Howl({
      src: ['assets/img/click_sound.mp3'], // Ensure the path is correct
      html5: true, // Forces HTML5 Audio, which is required for certain devices
      volume: 1.0, // Set the volume to a comfortable level
      onloaderror: (id, error) => {
        console.error('Failed to load sound:', error);
      },
      onplayerror: (id, error) => {
        console.error('Failed to play sound:', error);
        this.sound.once('unlock', () => {
          this.sound.play();
        });
      },
    });
  }

  incrementCounter() {
    this.counter++;

    if (this.isVibrationEnabled) {
      this.vibration.vibrate(100); // Vibrates for 100ms
    }

    if (this.isSoundEnabled) {
      console.log('Attempting to play sound...');
      this.sound.play(); // Attempt to play the sound
    }
  }

  resetCounter() {
    this.counter = 0; // Reset the counter
  }

  toggleVibration() {
    this.isVibrationEnabled = !this.isVibrationEnabled; // Toggle vibration
  }

  toggleSound() {
    this.isSoundEnabled = !this.isSoundEnabled; // Toggle sound
  }
}
