import {
  Component,
  inject,
  Inject,
  Injector,
  OnDestroy,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/ui/shared/components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { AppService } from 'src/domain/services/app.service';
import { UserRol } from 'src/domain/interfaces/app.interface';
import { EUSER_ROLS } from 'src/domain/enums/app.enums';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Observable, Subscription } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatCardModule,
    NgIf,
    MatButtonModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  public USER_ROLS = EUSER_ROLS;
  public userRol!: Signal<UserRol | null>;
  private _appService: AppService = inject(AppService);

  constructor() {
    this.userRol = toSignal(this._appService.getUserRol, {
      initialValue: null,
    });
  }

  public onSetUserRol(userRol: UserRol): void {
    this._appService.setUserRol = userRol;
  }
}
