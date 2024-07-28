/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpErrorResponse,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { APP_MOCKS } from 'src/data/mocks/app.mocks';
import { IMock } from '../interfaces/mock.interface';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class AppServeMockService {
  public request(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    const statusResponse = 200;
    const mock = this._getMock(req);

    if (!mock) {
      return throwError(
        () =>
          new HttpErrorResponse({
            status: 404,
            statusText: `The route was not found ${req.url}`,
            url: req.url,
          })
      );
    }

    if (mock?.status && mock?.status !== 200) {
      return new Observable((obs) => {
        setTimeout(() => {
          obs.error(
            new HttpErrorResponse({
              status: mock.status,
              statusText: 'Mock error response',
              error: mock.response,
              url: req.url,
            })
          );
          obs.complete();
        }, environment.testServeWait);
      });
    }

    return new Observable((obs) => {
      setTimeout(() => {
        obs.next(
          new HttpResponse({
            status: statusResponse,
            body: mock.response,
          })
        );
        obs.complete();
      }, environment.testServeWait);
    });
  }

  private _getMock(req: HttpRequest<any>) {
    return APP_MOCKS.find((route: IMock<unknown>) => {
      const url = req.url;
      const isSameRoute = new RegExp(`(^${route.url}$)`, 'g').test(url);
      const isSameMethod = !route?.method || route?.method === req.method;
      return isSameRoute && isSameMethod;
    });
  }
}
