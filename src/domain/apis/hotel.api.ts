import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel, IHotelsResponse } from '../interfaces/hotel.interface';
import { URLS_API } from '../constants/url-api.constant';

@Injectable({
  providedIn: 'root',
})
export class HotelApi {
  private _http = inject(HttpClient);

  // CRUD
  // Create Request Update Delete

  public requestHotels(): Observable<IHotelsResponse> {
    return this._http.get<IHotelsResponse>(URLS_API.HOTELS);
  }
}
