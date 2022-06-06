import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjU5NjcyNDBlYWQ5ZGRhZjJjZGQ2Y2IzZjJiYmU2OSIsInN1YiI6IjYyOTcxNDhmNTUwN2U5MTQ5NzRiOTQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n5WtY2IK1MJ7Lumz7dR3ksRvkC4_6TI1kBHEmW9Vic8'

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._token}`
      }
    })
    return next.handle(request);
  }
}
