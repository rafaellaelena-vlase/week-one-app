import {
  HttpEvent,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  
  console.log('Outgoing HTTP request', req);
  return next(req).pipe(
    tap((event: HttpEvent<unknown>) => {
      console.log('Incoming HTTP response', event);
    })
  );
}