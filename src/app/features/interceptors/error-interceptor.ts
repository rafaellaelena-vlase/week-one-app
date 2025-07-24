import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'unknown error occurred';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Connection Error: ${error.error.message}`;
      }
      else {
        switch (error.status) {
        case 400:
          errorMessage = 'Bad Request: Please check your input.';
          break;
        case 401:
          errorMessage = 'Unauthorized: Please log in.';
          break;
        case 403:
          errorMessage = 'You do not have permission to access this resource.';
          break;
        case 404:
          errorMessage = 'The requested resource could not be found.';
          break;
        case 500:
          errorMessage = 'Internal Server Error: Please try again later.';
          break;
        }
      }

      snackBar.open(errorMessage, 'Close', {
        duration: 5000, 
        panelClass: ['error-snackbar'] 
      });

      console.error('Error:', error);
      
      return throwError(() => error);
    })
  );
};
