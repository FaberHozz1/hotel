import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APP_CONSTANTS } from '../constants/app.constant';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _router = inject(Router);
  private _snackbar = inject(MatSnackBar);

  public goTo(url: string): void {
    this._router.navigateByUrl(url);
  }

  public showActiveConfirm(): void {
    this._snackbar.open('Update complete!', 'ok', {
      duration: APP_CONSTANTS.SNACKBAR_DURATION,
    });
  }
}
