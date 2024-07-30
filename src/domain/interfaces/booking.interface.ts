import { EDOCUMENT_TYPE, EGENDER } from '../enums/booking.enum';
import { IHotel } from './hotel.interface';

export interface IBookingList {
  bookings: IBooking[];
}

export interface IBooking {
  id: number;
  hotel: IHotel;
  guest: IGuest;
  date_in: Date;
  date_out: Date;
}

export interface IGuest {
  id: number;
  name: string;
  birthdate: Date;
  gender: EGENDER;
  document_type: EDOCUMENT_TYPE;
  document_number: string;
  email: string;
  phone: string;
}
