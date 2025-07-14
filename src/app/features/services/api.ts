import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LyricsInterface } from '../interfaces/lyrics-interface';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private lyricsApiUrl = 'https://api.lyrics.ovh/v1';

  constructor(private http: HttpClient) { 

  }

  public getLyrics(artist: string, song: string): Observable<LyricsInterface> {
    const url = `${this.lyricsApiUrl}/${artist}/${song}`;
    return this.http.get<LyricsInterface>(url);
  }
}
