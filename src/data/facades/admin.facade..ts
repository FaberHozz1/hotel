import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HotelApi } from 'src/domain/apis/hotel.api';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';
import {
  IHotel,
  IHotelDetails,
  IHotelsResponse,
  IRoom,
} from 'src/domain/interfaces/hotel.interface';
import { AppService } from 'src/domain/services/app.service';

@Injectable({ providedIn: 'root' })
export class AdminFacade {
  public _appService = inject(AppService);
  public _hotelApi = inject(HotelApi);

  public onChangeMenuItem(url: string): void {
    this._appService.goTo(url);
  }

  public requestHotels(): Observable<IHotel[]> {
    return this._hotelApi
      .requestHotels()
      .pipe(map(({ hotels }: IHotelsResponse) => hotels));
  }

  public createHotel(hotel: Omit<IHotel, 'id'>): Observable<null> {
    return this._hotelApi.createHotel(hotel);
  }

  public updateHotel(hotel: IHotel): Observable<null> {
    return this._hotelApi.updateHotel(hotel);
  }

  public createHotelRoom(room: Omit<IRoom, 'id'>): Observable<null> {
    return this._hotelApi.createHotelRoom(room);
  }

  public updateHotelRoom(room: IRoom): Observable<null> {
    return this._hotelApi.updateHotelRoom(room);
  }

  public requestHotelDetails(id: string): Observable<IHotelDetails> {
    return this._hotelApi.requestHotelDetailsById(id);
  }

  public openHotel(id: string): void {
    const url = APP_ROUTES.ADMIN.CHILDREN.HOTEL.URL + id;
    this._appService.goTo(url);
  }

  public updateRoomActive(id: string): void {
    this._hotelApi
      .updateHotelRoomActive(id)
      .subscribe(() => this._appService.showActiveConfirm());
  }

  public updateHotelActive(id: string): void {
    this._hotelApi
      .updateHotelActive(id)
      .subscribe(() => this._appService.showActiveConfirm());
  }
}
