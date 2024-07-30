import { EDOCUMENT_TYPE, EGENDER } from '../enums/booking.enum';
import { IHotel } from './hotel.interface';

export interface IBookingList {
  bookings: IBooking[];
}

export interface IBooking {
  id: number;
  date_in: Date;
  date_out: Date;
  hotel_id: number;
  hotel_name: string;
  hotel_address: string;
  hotel_phone: string;
  hotel_active: boolean;
  guest_id: number;
  guest_name: string;
  guest_birthdate: Date;
  guest_gender: EGENDER;
  guest_document_type: EDOCUMENT_TYPE;
  guest_document_number: string;
  guest_email: string;
  guest_phone: string;
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
