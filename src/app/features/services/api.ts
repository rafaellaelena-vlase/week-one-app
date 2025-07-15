import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LyricsInterface } from '../interfaces/lyrics-interface';
import { EightBallResponseInterface } from '../interfaces/eight-ball-response-interface';
import { EightBallRequestInterface } from '../interfaces/eight-ball-request-interface';
import { QuestionHistory } from '../interfaces/question-history';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private lyricsApiUrl = 'https://api.lyrics.ovh/v1';
  private eightBallApiUrl = '/api/biased';
  private jsonPlaceholderUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { 

  }

  public getLyrics(artist: string, song: string): Observable<LyricsInterface> {
    const url = `${this.lyricsApiUrl}/${artist}/${song}`;
    return this.http.get<LyricsInterface>(url);
  }

  public askMagicBall(request: EightBallRequestInterface): Observable<EightBallResponseInterface> {
    const url = `${this.eightBallApiUrl}`;
    return this.http.post<EightBallResponseInterface>(url, request);
  }

  public deleteQuestionHistory(id: number): Observable<QuestionHistory> {
    const url = `${this.jsonPlaceholderUrl}/posts/${id}`;
    return this.http.delete<QuestionHistory>(url);
  }
}
