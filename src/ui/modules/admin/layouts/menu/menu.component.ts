import { ADMIN_MENU } from 'src/domain/constants/admin.constant';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenuModule, RouterOutlet, MatIconModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.sass',
})
export class MenuComponent {
  public menuItems = ADMIN_MENU;
  private _adminFacade = inject(AdminFacade);

  public onItemClick(url: string): void {
    this._adminFacade.onChangeMenuItem(url);
  }
}
