import { Injectable } from '@angular/core';
import { UserRol } from '../interfaces/app.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _userRol$: Subject<UserRol | null> = new Subject<UserRol | null>();

  public set setUserRol(userRol: UserRol) {
    this._userRol$.next(userRol);
  }

  public get getUserRol(): Observable<UserRol | null> {
    return this._userRol$;
  }
}
