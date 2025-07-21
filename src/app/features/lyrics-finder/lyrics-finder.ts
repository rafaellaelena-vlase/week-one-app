import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
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

  constructor(private api: Api, private route:ActivatedRoute, private router: Router) {
  }

  initValues(): void {
    this.artist = '';
    this.song = '';
    this.lyrics = null;
    this.foundArtist = null;
    this.foundSong = null;
    this.isLoading = false;
    this.error = null;
  }

  ngOnInit(): void {
    this.initValues();

    this.route.paramMap.subscribe(params => {
      const artistFromURL = params.get('artist');
      const songFromURL = params.get('song');

      if (artistFromURL && songFromURL) {
        this.artist = decodeURIComponent(artistFromURL);
        this.song = decodeURIComponent(songFromURL);

        this.findLyrics();
      }
    });
  }

  searchFromInput(): void {
    this.router.navigate(
      ['/lyrics-display'],
      {
        queryParams: {
          artist: this.artist,
          song: this.song
        }
      }
    );
  }

  findLyrics() {
    if (!this.artist || !this.song) return;
    console.log('Se încearcă navigarea cu:', { artist: this.artist, song: this.song });

    this.api.getLyrics(this.artist, this.song).pipe(takeUntil(this.destroy$))
    .subscribe({   
      next: (response) => {
        this.lyrics = response.lyrics;
        this.foundArtist = this.artist;
        this.foundSong = this.song;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.error('Component destroyed');
    this.destroy$.complete();
  }
}
