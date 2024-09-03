import { Component } from '@angular/core';

@Component({
  selector: 'app-doua',
  templateUrl: './doua.page.html',
  styleUrls: ['./doua.page.scss'],
})
export class DouaPage {
  showArabic = true;
  showTranscription = false;
  showFrench = false;

  showArabicText() {
    this.showArabic = true;
    this.showTranscription = false;
    this.showFrench = false;
  }

  showTranscriptionText() {
    this.showArabic = false;
    this.showTranscription = true;
    this.showFrench = false;
  }

  showFrenchText() {
    this.showArabic = false;
    this.showTranscription = false;
    this.showFrench = true;
  }
}
