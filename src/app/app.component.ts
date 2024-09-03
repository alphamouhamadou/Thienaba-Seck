import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Assurez-vous que le chemin est correct
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSubMenu: boolean = false; // Variable pour contrôler l'affichage du sous-menu

  constructor() {}

  // Méthode pour basculer l'affichage du sous-menu
  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
}
