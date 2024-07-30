import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS_API } from '../constants/url-api.constant';
import { IBookingList } from '../interfaces/booking.interface';

@Injectable({
  providedIn: 'root',
})
export class BookingApi {
  private _http = inject(HttpClient);

  public requestBookings(): Observable<IBookingList> {
    return this._http.get<IBookingList>(URLS_API.BOOKINGS);
  }
}
