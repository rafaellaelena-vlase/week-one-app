import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api } from '../services/api';

@Component({
  selector: 'app-lyrics-display',
  standalone: false,
  templateUrl: './lyrics-display.html',
  styleUrl: './lyrics-display.scss'
})
export class LyricsDisplay implements OnInit {
  artist: string = '';
  song: string = '';
  lyrics: string | null = null;

  isLoading: boolean = false;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private api: Api) {
  }

  initValues(): void {
    this.artist = '';
    this.song = '';
    this.lyrics = null;
    this.isLoading = false;
    this.error = null;
  }

  ngOnInit(): void {
    
    this.initValues();  

    this.route.queryParamMap.subscribe(params => {
      this.artist = params.get('artist') ?? '';
      this.song = params.get('song') ?? '';
      
      if (this.artist && this.song) {
        this.fetchLyrics();
      }
    });
  }

  fetchLyrics(): void {
    console.log('Fetching lyrics for:', this.artist, this.song);
    this.api.getLyrics(this.artist!, this.song!).subscribe({
      next: (response) => {
        this.lyrics = response.lyrics;
      },
      error: (err) => {
        console.error('Error fetching lyrics:', err);
        this.lyrics = 'Lyrics not found.';
      }
    });
  }
}
