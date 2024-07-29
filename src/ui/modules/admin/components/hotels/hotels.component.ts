import { Component, inject } from '@angular/core';
import { CardComponent } from 'src/ui/shared/components/card/card.component';
import { ListComponent } from 'src/ui/shared/layouts/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { MatDialog } from '@angular/material/dialog';
import { CreateHotelComponent } from '../create-hotel/create-hotel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [
    CardComponent,
    ListComponent,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.sass',
})
export class HotelsComponent {
  private _adminFacade = inject(AdminFacade);
  readonly displayedColumns: string[] = [
    'id',
    'name',
    'address',
    'phone',
    'button',
  ];
  readonly dataSource = this._adminFacade.requestHotels();
  readonly dialog = inject(MatDialog);

  public openDialog(): void {
    this.dialog.open(CreateHotelComponent);
  }

  public onDetailsClick(id: string): void {
    this._adminFacade.openHotel(id);
  }
}
