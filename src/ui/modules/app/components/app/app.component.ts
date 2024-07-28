import { AppService } from 'src/domain/services/app.service';

import { Component, inject, Signal } from '@angular/core';
import { EUSER_ROLS } from 'src/domain/enums/app.enums';
import { HeaderComponent } from 'src/ui/shared/components/header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserRol } from 'src/domain/interfaces/app.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {}
