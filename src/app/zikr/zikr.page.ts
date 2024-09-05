import { Component, OnDestroy } from '@angular/core';
import { Howl } from 'howler';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-zikr',
  templateUrl: './zikr.page.html',
  styleUrls: ['./zikr.page.scss'],
})
export class ZikrPage implements OnDestroy {
  playlist = [
    { title: 'Pape Mor Gueye', image: 'assets/img/pap.jpg', file: 'assets/aud/zikr1.mp3' },
    { title: 'Serigne Adama Seck', image: 'assets/img/ada.jpg', file: 'assets/aud/zikr2.mp3' },
    { title: 'Dahira Ibnoule Mouhaib', image: 'assets/img/ib.jpg', file: 'assets/aud/zikr3d.mp3' },
    { title: 'Sikar', image: 'assets/img/sikr.jpg', file: 'assets/aud/sikar.mp3' },
  ];
  
  currentTrack: Howl | null = null;
  currentTrackIndex: number = -1;
  isPlaying = false;
  progress = 0;
  currentTime = 0;
  duration = 0;

  constructor(private cd: ChangeDetectorRef) {}

  togglePlayPause(track: any, index: number) {
    if (this.currentTrackIndex === index && this.isPlaying) {
      this.currentTrack?.pause();
      this.isPlaying = false;
    } else {
      if (this.currentTrack) {
        this.currentTrack.stop();
      }
      this.currentTrack = new Howl({
        src: [track.file],
        html5: true,
        preload: true,
        volume: 1.0,
        onplay: () => {
          this.isPlaying = true;
          this.currentTrackIndex = index;
          this.duration = this.currentTrack?.duration() || 0;
          this.updateProgress();
          this.cd.detectChanges(); // Assure la mise à jour de l'UI
        },
        onend: () => {
          this.stopTrack();
        },
        onloaderror: (id, error) => {
          console.error('Audio load error:', error);
          alert('Failed to load audio. Please check the file and try again.');
        },
        onplayerror: (id, error) => {
          console.error('Audio play error:', error);
          this.currentTrack?.once('unlock', () => {
            this.currentTrack?.play();
          });
        }
      });
      this.currentTrack.play();
    }
  }

  updateProgress() {
    const update = () => {
      if (this.currentTrack && this.isPlaying) {
        this.currentTime = this.currentTrack.seek() as number;
        this.progress = this.currentTime / this.duration;
        this.cd.detectChanges(); // Mise à jour de l'UI pour chaque progression
        setTimeout(update, 1000);
      }
    };
    update();
  }

  stopTrack() {
    if (this.currentTrack) {
      this.currentTrack.stop();
      this.isPlaying = false;
      this.currentTrackIndex = -1;
      this.progress = 0;
      this.currentTime = 0;
      this.cd.detectChanges(); // Mise à jour de l'UI après arrêt
    }
  }

  formatTime(secs: number): string {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = Math.floor(secs % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  seekTo(event: MouseEvent) {
    // Utilisez un casting pour garantir que currentTarget est un HTMLElement
    const target = event.currentTarget as HTMLElement;
    if (target) {
      const clickPosition = (event.clientX - target.offsetLeft) / target.offsetWidth;
      const seekTime = clickPosition * this.duration;
      if (this.currentTrack) {
        this.currentTrack.seek(seekTime);
        this.currentTime = seekTime;
        this.cd.detectChanges(); // Mise à jour de l'UI après le seek
      }
    }
  }

  ngOnDestroy() {
    if (this.currentTrack) {
      this.currentTrack.unload(); // Décharge le Howl pour libérer les ressources
    }
  }
}
