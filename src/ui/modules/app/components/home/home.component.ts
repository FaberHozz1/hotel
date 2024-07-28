import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { EUSER_ROLS } from 'src/domain/enums/app.enums';
import { UserRol } from 'src/domain/interfaces/app.interface';
import { AppService } from 'src/domain/services/app.service';
import { UserService } from 'src/domain/services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  public USER_ROLS = EUSER_ROLS;
  private _userService: UserService = inject(UserService);
  private _router = inject(Router);

  public onSetUserRol(userRol: UserRol): void {
    this._userService.setUserRol = userRol;
    this._router.navigate([userRol]);
  }
}
