import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EightBallResponseInterface } from '../interfaces/eight-ball-response-interface';
import { EightBallRequestInterface } from '../interfaces/eight-ball-request-interface';
import { Api } from '../services/api';
import { Subject, takeUntil } from 'rxjs';
import { QuestionHistory } from '../interfaces/question-history';

@Component({
  selector: 'app-magic-ball',
  standalone: false,
  templateUrl: './magic-ball.html',
  styleUrl: './magic-ball.scss'
})
export class MagicBall implements OnInit{
  question: string = '';
  lucky: boolean = true;
  response: EightBallResponseInterface | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  questionHistory: QuestionHistory[] = [];
  private nextId = 1;

  private destroy$ = new Subject<void>();

  constructor(private api: Api, private cdr: ChangeDetectorRef) { 

  }

  ngOnInit() {
    this.question = '';
    this.lucky = true;
    this.response = null;
    this.isLoading = false;
    this.error = null;
  }

  askMagicBall() {
    if (!this.question) return;

    this.addQuestionToHistory(this.question);
  
    this.isLoading = true;
    this.lucky = true;
    this.response = null;
    this.error = null;

    const request: EightBallRequestInterface = {
      question: this.question,
      lucky: this.lucky,
    };

    console.log('sending to API:', request);

    this.api.askMagicBall(request).pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        this.response = response;
      },
      // error: (err) => {
      //   this.error = 'Error fetching response from Magic Ball';
      //   this.isLoading = false;
      //   //this.cdr.detectChanges();
      //   console.error(err);
      // },
      complete: () => {
        this.isLoading = false;
        //this.cdr.detectChanges();
      }
    });
  }

  private addQuestionToHistory(questionText: string): void {
    const newQuestion: QuestionHistory = {
      id: this.nextId++,
      questionText: questionText
    };
    this.questionHistory.push(newQuestion);
  }

  deleteQuestionFromHistory(id: number): void {
    this.api.deleteQuestionHistory(id).pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {
        this.questionHistory = this.questionHistory.filter(q => q.id !== id);
      },
      error: (err) => {
        console.error('Error deleting question from history:', err);
        this.error = 'Error deleting question from history';
        //this.cdr.detectChanges();
      },
      complete: () => {
        //this.cdr.detectChanges();
      }
    });
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.error('Component destroyed');
    this.destroy$.complete();
  }
}
