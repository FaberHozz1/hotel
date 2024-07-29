import { EHOTEL_ROOM_SIZE, EHOTEL_ROOM_TYPE } from '../enums/hotel.enum';

export interface IHotel {
  id: number;
  name: string;
  address: string;
  phone: string;
}

export interface IHotelsResponse {
  hotels: IHotel[];
}

export interface IHotelDetails extends IHotel {
  rooms: IRoom[];
}

export interface IRoom {
  id: number;
  allowed_guests: number;
  price: number;
  size: EHOTEL_ROOM_SIZE;
  tax: number;
  type: EHOTEL_ROOM_TYPE;
}
