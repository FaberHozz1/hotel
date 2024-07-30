import { Component, inject, signal } from '@angular/core';
import { CardComponent } from 'src/ui/shared/components/card/card.component';
import { ListComponent } from 'src/ui/shared/layouts/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { IBooking } from 'src/domain/interfaces/booking.interface';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-list-bookings',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe,
    KeyValuePipe,
    ListComponent,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatTableModule,
  ],
  templateUrl: './list-bookings.component.html',
  styleUrl: './list-bookings.component.sass',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ListBookingsComponent {
  private _adminFacade = inject(AdminFacade);
  readonly displayedColumns: Object = {
    id: 'id',
    date_in: 'Fecha ingreso',
    date_out: 'Fecha salida',
    hotel_name: 'Hotel',
    guest_name: 'Huesped',
    guest_email: 'Correo',
  };
  columnsToDisplayWithExpand = [
    'id',
    'date_in',
    'date_out',
    'hotel_name',
    'guest_name',
    'guest_email',
    'expand',
  ];
  public expandedElement!: IBooking;
  readonly dataSource = this._adminFacade.requestBookingsList();
  readonly panelOpenState = signal(false);

  public onDetailsClick(id: string): void {
    // this._adminFacade.openHotel(id);
  }
}
