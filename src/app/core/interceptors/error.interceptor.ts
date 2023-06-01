import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorsApi } from '../utils/error-api';
import { AlertService } from '../services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly alertService: AlertService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const unknown = 0;
    const internal_server_error = 500;
    return next.handle(request).pipe(catchError(error => {
    
      if(error instanceof HttpErrorResponse) {
        if(error.status === unknown || error.status === internal_server_error )
            this.alertService.AlertaErroInesperadoStatus500();
        else{
            console.log(error);
          this.alertService.AlertaErroRegrasDeNegocio(ErrorsApi.Get(error)); 
        }
            
      }
      return throwError(error);
    }));
  }
}
