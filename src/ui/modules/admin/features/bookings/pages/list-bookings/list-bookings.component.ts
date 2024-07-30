import { Component, inject, signal } from '@angular/core';
import { CardComponent } from 'src/ui/shared/components/card/card.component';
import { ListComponent } from 'src/ui/shared/layouts/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DatePipe } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-list-bookings',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe,
    ListComponent,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTableModule,
    MatExpansionModule,
  ],
  templateUrl: './list-bookings.component.html',
  styleUrl: './list-bookings.component.sass',
})
export class ListBookingsComponent {
  private _adminFacade = inject(AdminFacade);
  readonly displayedColumns: string[] = [
    'id',
    'date_in',
    'date_out',
    'hotel_name',
    'guest_name',
    'guest_email',
    'button',
  ];
  readonly dataSource = this._adminFacade.requestBookingsList();
  readonly panelOpenState = signal(false);

  public onDetailsClick(id: string): void {
    // this._adminFacade.openHotel(id);
  }
}
