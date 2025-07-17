import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading-service';

@Component({
  selector: 'app-loading-indicator',
  standalone: false,
  templateUrl: './loading-indicator.html',
  styleUrl: './loading-indicator.scss'
})
export class LoadingIndicator {
  loading$: Observable<boolean>;

  @ContentChild("loading")
  customLoadingIndicator: TemplateRef<any> | null = null;

  constructor(
  private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$;
  }
}
