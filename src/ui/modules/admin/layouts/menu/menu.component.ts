import { Component, inject, model, signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ADMIN_MENU } from 'src/domain/constants/admin.constant';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { MatDialog } from '@angular/material/dialog';
import { CreateHotelComponent } from '../../components/create-hotel/create-hotel.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenuModule, RouterOutlet, MatIconModule],
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
