import { Component } from '@angular/core';

@Component({
  selector: 'app-tidiane-thienaba',
  templateUrl: './tidiane-thienaba.page.html',
  styleUrls: ['./tidiane-thienaba.page.scss'],
})
export class TidianeThienabaPage {
  selectedImage: string = './assets/img/mame.jpg'; // Remplacez par le chemin de l'image par défaut

  constructor() {}

  // Méthode pour afficher l'image en fonction du bouton cliqué
  showImage(type: string) {
    if (type === 'wird') {
      this.selectedImage = './assets/img/mame.jpg'; // Chemin de l'image pour Silsila Wird
    } else if (type === 'lidiaza') {
      this.selectedImage = './assets/img/sikar.jpg'; // Chemin de l'image pour Silsila LIDIAZA
    }
  }
}
