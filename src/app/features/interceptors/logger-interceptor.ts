import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading-service';

export const SKIP_LOADING = new HttpContextToken<boolean>(() => false);

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.context.get(SKIP_LOADING)) {
      return next.handle(req);
    }

    this.loadingService.loadingOn();

    return next.handle(req).pipe(
      finalize(() => this.loadingService.loadingOff())
    );
  }
}
