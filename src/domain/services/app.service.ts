import { inject, Injectable } from '@angular/core';
import { UserRol } from '../interfaces/app.interface';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _router = inject(Router);

  public goTo(url: string): void {
    this._router.navigateByUrl(url);
  }
}
