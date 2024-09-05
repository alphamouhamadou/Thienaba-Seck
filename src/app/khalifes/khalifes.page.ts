import { Component } from '@angular/core';

@Component({
  selector: 'app-khalifes',
  templateUrl: './khalifes.page.html',
  styleUrls: ['./khalifes.page.scss'],
})
export class KhalifesPage {

  // Liste des Khalifes avec leurs informations
  khalifes = [
    { name: 'Serigne Momar Talla Seck', mandate: '1894 - 1946', imagePath: 'assets/img/khalife1.jpg' },
    { name: 'Serigne Ibrahima Seck', mandate: '1946 - 1973', imagePath: 'assets/img/khalife2.jpg' },
    { name: 'Serigne Alpha Mamadou Seck', mandate: '1973 - 1988', imagePath: 'assets/img/khalife3.jpg' },
    { name: 'Serigne Mouhamadou Ly Seck', mandate: '1988 - 1992', imagePath: 'assets/img/khalife4.JPG' },
    { name: 'Serigne Ousseynou Khoudia Seck', mandate: '1992 - 1999', imagePath: 'assets/img/khalife5.jpg' },
    { name: 'Serigne Ousseynou Khar Seck', mandate: '1999 - 2008', imagePath: 'assets/img/khalife6.jpg' },
    { name: 'Serigne Cheikh Ahmed Tidiane Seck', mandate: '2008 - 2020', imagePath: 'assets/img/khalife7.jpg' },
    { name: 'Serigne Abdou Rahim Seck', mandate: '2020 - 2021', imagePath: 'assets/img/khalife8.jpg' },
  ];

  constructor() {}

}
