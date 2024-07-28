import { inject, Injectable } from '@angular/core';
import { AppService } from 'src/domain/services/app.service';

@Injectable({ providedIn: 'root' })
export class AdminFacade {
  public _appService = inject(AppService);

  public onChangeMenuItem(url: string): void {
    this._appService.goTo(url);
  }
}
