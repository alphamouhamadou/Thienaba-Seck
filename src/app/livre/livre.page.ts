import { Component } from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage {
  livres = [
    { 
      title: 'Livre 1', 
      subtitle: 'Auteur 1', 
      imagePath: 'assets/img/livre1.jpg', 
      description: 'Description du livre 1' 
    },
    { 
      title: 'Livre 2', 
      subtitle: 'Auteur 2', 
      imagePath: 'assets/img/livre2.jpg', 
      description: 'Description du livre 2' 
    },
    { 
      title: 'Livre 3', 
      subtitle: 'Auteur 3', 
      imagePath: 'assets/img/livre3.jpg', 
      description: 'Description du livre 3' 
    },
    // Ajoutez d'autres livres ici
  ];
  
  
  constructor() {}
  openLivre(livre) {
    // Ajoutez votre logique pour ouvrir ou afficher le livre
    console.log('Ouverture du livre:', livre);
  }
  
}
