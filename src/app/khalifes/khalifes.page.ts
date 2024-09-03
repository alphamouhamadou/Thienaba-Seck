import { Component } from '@angular/core';

@Component({
  selector: 'app-khalifes',
  templateUrl: './khalifes.page.html',
  styleUrls: ['./khalifes.page.scss'],
})
export class KhalifesPage {

  // Liste des Khalifes avec leurs informations
  khalifes = [
    { name: 'Serigne Momar Talla Seck', mandate: '1894 - 1946', imagePath: 'assets/khalife1.jpg' },
    { name: 'Serigne Ibrahima Seck', mandate: '1946 - 1973', imagePath: 'assets/khalife2.jpg' },
    { name: 'Serigne Alpha Mamadou Seck', mandate: '1973 - 1988', imagePath: 'assets/khalife3.jpg' },
    { name: 'Serigne Mouhamadou Ly Seck', mandate: '1988 - 1992', imagePath: 'assets/khalife4.jpg' },
    { name: 'Serigne Ousseynou Khoudia Seck', mandate: '1992 - 1999', imagePath: 'assets/khalife5.jpg' },
    { name: 'Serigne Ousseynou Khar Seck', mandate: '1999 - 2008', imagePath: 'assets/khalife6.jpg' },
    { name: 'Serigne Cheikh Ahmed Tidiane Seck', mandate: '2008 - 2020', imagePath: 'assets/khalife7.jpg' },
    { name: 'Serigne Abdou Rahim Seck', mandate: '2020 - 2021', imagePath: 'assets/khalife8.jpg' },
    { name: 'Serigne Assane Seck', mandate: '2021 - Présent', imagePath: 'assets/khalife9.jpg' },
  ];

  constructor() {}

}
