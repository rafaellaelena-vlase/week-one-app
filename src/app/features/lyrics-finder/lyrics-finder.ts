import { Component, ChangeDetectorRef, OnInit  } from '@angular/core';

import { Api } from '../services/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-lyrics-finder',
  standalone: false,
  templateUrl: './lyrics-finder.html',
  styleUrl: './lyrics-finder.scss'
})
export class LyricsFinder implements OnInit{
  artist: string = '';
  song: string = '';

  lyrics: string | null = null;
  foundArtist: string | null = null;
  foundSong: string | null = null;

  isLoading: boolean = false;
  error: string | null = null;

   private destroy$ = new Subject<void>();

  constructor(private api: Api, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.artist = '';
    this.song = '';
    this.lyrics = null;
    this.foundArtist = null;
    this.foundSong = null;
    this.isLoading = false;
    this.error = null;
  }

  findLyrics() {
    // this.lyrics = null;
    // this.foundArtist = null;
    // this.foundSong = null;
    // this.isLoading = true;
    // this.error = null;

    this.api.getLyrics(this.artist, this.song).pipe(takeUntil(this.destroy$))
    .subscribe({   
      next: (response) => {
        this.lyrics = response.lyrics;
        this.foundArtist = this.artist;
        this.foundSong = this.song;
      },
      error: (err) => {
        this.error = 'Lyrics not found';
        this.isLoading = false;
        this.cdr.detectChanges();
        console.error(err);
      },
      complete: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.error('Component destroyed');
    this.destroy$.complete();
  }
}
