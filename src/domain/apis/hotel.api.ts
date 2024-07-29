import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IHotel,
  IHotelDetails,
  IHotelsResponse,
  IRoom,
} from '../interfaces/hotel.interface';
import { URLS_API } from '../constants/url-api.constant';

@Injectable({
  providedIn: 'root',
})
export class HotelApi {
  private _http = inject(HttpClient);

  public requestHotels(): Observable<IHotelsResponse> {
    return this._http.get<IHotelsResponse>(URLS_API.HOTELS);
  }

  public createHotel(hotel: Omit<IHotel, 'id'>): Observable<null> {
    return this._http.post<null>(URLS_API.HOTEL, hotel);
  }

  public updateHotel(hotel: IHotel): Observable<null> {
    return this._http.put<null>(URLS_API.HOTEL, hotel);
  }

  public createHotelRoom(room: Omit<IRoom, 'id'>): Observable<null> {
    return this._http.post<null>(URLS_API.ROOM, room);
  }

  public updateHotelRoom(room: IRoom): Observable<null> {
    return this._http.put<null>(URLS_API.ROOM, room);
  }

  public updateHotelRoomActive(id: string): Observable<null> {
    return this._http.put<null>(URLS_API.ROOM_ACTIVE, id);
  }

  public requestHotelDetailsById(id: string): Observable<IHotelDetails> {
    let params = new HttpParams();
    params = params.appendAll({ id });
    return this._http.get<IHotelDetails>(URLS_API.HOTEL, {
      params,
    });
  }
}
