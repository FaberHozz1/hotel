import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AdminFacade } from 'src/data/facades/admin.facade.';
import { IHotelDetails } from 'src/domain/interfaces/hotel.interface';
import { CreateRoomComponent } from '../create-room/create-room.component';
import { CardComponent } from 'src/ui/shared/components/card/card.component';
import { ListComponent } from 'src/ui/shared/layouts/list/list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [
    CardComponent,
    ListComponent,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    CurrencyPipe,
  ],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.sass',
})
export class HotelComponent {
  private _route = inject(ActivatedRoute);
  private _adminFacade = inject(AdminFacade);
  public hotelDetails!: Signal<IHotelDetails | undefined>;
  readonly dialog = inject(MatDialog);
  readonly displayedColumns: string[] = [
    'id',
    'type',
    'size',
    'allowed_guests',
    'price',
    'tax',
    'total_price',
    'button',
  ];

  constructor() {
    const id = String(this._route.snapshot.paramMap.get('id'));
    this.hotelDetails = toSignal(this._adminFacade.requestHotelDetails(id));
  }

  public openDialog(): void {
    this.dialog.open(CreateRoomComponent);
  }

  public onEditClick(id: string): void {
    console.log('---> openmodal: ', id);
  }
}
