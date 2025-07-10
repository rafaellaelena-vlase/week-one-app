import { Component, signal, computed, effect } from '@angular/core';

export interface Song {
  title: string;
  artist: string;
  mood: 'happy' | 'sad' | 'energetic' | 'chill';
}

@Component({
  selector: 'app-music-stats',
  standalone: false,
  templateUrl: './music-stats.html',
  styleUrl: './music-stats.scss'
})
export class MusicStats {
  loggedSongs = signal<Song[]>([
    { title: 'The FInal Countdown', artist:'Europe', mood:'energetic' },
    { title: 'Silver Springs', artist:'Fleetwood Mac', mood:'sad' },
    { title: 'Fade Into You', artist:'Mazzy Star', mood:'chill' },
    { title: 'Unwritten', artist:'Natasha Bedingfield', mood:'happy' },
  ]);

  newSongTitle = signal('');
  newSongArtist = signal('');
  newSongMood = signal<'happy' | 'sad' | 'energetic' | 'chill'>('energetic');

  constructor() {
    console.log('input current state');
    console.log(`title: "${this.newSongTitle()}"`);
    console.log(`artist: "${this.newSongArtist()}"`);
    console.log(`mood: "${this.newSongMood()}"`);
  }

  totalSongs = computed(() => this.loggedSongs().length);
  happyCount = computed(() => this.loggedSongs().filter(s => s.mood === 'happy').length);
  sadCount = computed(() => this.loggedSongs().filter(s => s.mood === 'sad').length);
  energeticCount = computed(() => this.loggedSongs().filter(s => s.mood === 'energetic').length);
  chillCount = computed(() => this.loggedSongs().filter(s => s.mood === 'chill').length);

  addSong() {
    console.log('clicked on add song ');
    console.log('title:', this.newSongTitle());
    console.log('artist:', this.newSongArtist());
    console.log('mood:', this.newSongMood());
    
    if (this.newSongTitle().trim() && this.newSongArtist().trim()) {
      const newSong: Song = {
        title: this.newSongTitle(),
        artist: this.newSongArtist(),
        mood: this.newSongMood()
      };
      this.loggedSongs.update(currentSongs => [...currentSongs, newSong]);
      this.newSongTitle.set('');
      this.newSongArtist.set('');
    }
  }
}
