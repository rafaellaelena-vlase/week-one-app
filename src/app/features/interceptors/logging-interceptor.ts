import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

// @Injectable()
// export class LoggingInterceptor implements HttpInterceptor {
//   constructor() {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('Outgoing HTTP request', request);
//     return next.handle(request).pipe(
//       tap((event: HttpEvent<any>) => {
//         console.log('Incoming HTTP response', event);
//       })
//     );
//   }
// }

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