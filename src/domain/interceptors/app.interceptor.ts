import {
  HttpEvent,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AppServeMockService } from '../services/app-serve-mock.service';
import { environment } from 'src/environments/environment.dev';

const _appServeMockService = new AppServeMockService();

function _checkIsTest(): boolean {
  return !environment.production;
}

function _sendLocalServer(req: HttpRequest<any>): Observable<HttpEvent<any>> {
  return _appServeMockService.request(req);
}

export const AppServerInterceptor: HttpInterceptorFn = (req, next) => {
  const isTestServer: boolean = _checkIsTest();
  if (isTestServer) {
    return _sendLocalServer(req);
  }

  return next(req);
};
