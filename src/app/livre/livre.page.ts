import { Component } from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.page.html',
  styleUrls: ['./livre.page.scss'],
})
export class LivrePage {
  livres = [
    { 
      title: 'Samba Saajo. La voix des martyrs', 
      subtitle: 'Pr Souleymane DIA, 2005', 
      imagePath: 'assets/img/jule.jpg', // Update with your actual image path
      description: 'La voix des martyrs racontée par Pr Souleymane DIA.'
    },
    { 
      title: 'Sur les traces de la communauté Tijane de Thiénaba Seck', 
      subtitle: 'Dr Daouda Diop, 2023', 
      imagePath: 'assets/img/daoda.jpg', // Update with your actual image path
      description: 'Espaces, orthodoxie et économie confrérique par Dr Daouda Diop.'
    },
  ];

  constructor() {}

  openLivre(livre: any) {
    // Ajoutez votre logique pour ouvrir ou afficher le livre
    console.log('Ouverture du livre:', livre);
  }
}
