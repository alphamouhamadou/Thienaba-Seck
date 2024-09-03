import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tidiane-thienaba',
  templateUrl: './tidiane-thienaba.page.html',
  styleUrls: ['./tidiane-thienaba.page.scss'],
})
export class TidianeThienabaPage {
  selectedImage: string = './assets/img/mame.jpg'; // Remplacez par le chemin de l'image par défaut

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  // Méthode pour afficher l'image en fonction du bouton cliqué
  showImage(type: string) {
    if (type === 'wird') {
      this.selectedImage = './assets/img/mame.jpg'; // Chemin de l'image pour Silsila Wird
    } else if (type === 'lidiaza') {
      this.selectedImage = './assets/img/sikar.jpg'; // Chemin de l'image pour Silsila LIDIAZA
    }
  }
}
