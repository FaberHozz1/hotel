import { URLS_API } from 'src/domain/constants/url-api.constant';
import {
  EHOTEL_ROOM_SIZE,
  EHOTEL_ROOM_TYPE,
} from 'src/domain/enums/hotel.enum';
import {
  IHotelDetails,
  IHotelsResponse,
} from 'src/domain/interfaces/hotel.interface';
import { IMock } from 'src/domain/interfaces/mock.interface';

export const MOCK_GET_HOTELS_SUCCESS: IMock<IHotelsResponse> = {
  url: URLS_API.HOTELS,
  response: {
    hotels: [
      {
        id: 1,
        name: 'Hotel Fake',
        address: 'calle fake 123',
        phone: '3211231313',
      },
      {
        id: 2,
        name: 'Hotel Falso',
        address: '123 #12 - 12',
        phone: '3123445887',
      },
      {
        id: 3,
        name: 'Simpsons Resort',
        address: '742 de Evergreen Terrace',
        phone: '3009085672',
      },
      {
        id: 4,
        name: 'Hotel Simpsons',
        address: 'Avenida Siempreviva 742',
        phone: '3009085672',
      },
      {
        id: 5,
        name: 'Bikini Bottom',
        address: 'Calle concha 124',
        phone: '3215554443',
      },
      {
        id: 6,
        name: 'Griffin Resort',
        address: '31 Spooner Street',
        phone: '3214478936',
      },
    ],
  },
  method: 'GET',
};

export const MOCK_POST_HOTEL_SUCCESS: IMock<null> = {
  url: URLS_API.HOTEL,
  response: null,
  method: 'POST',
};

export const MOCK_PUT_HOTEL_SUCCESS: IMock<null> = {
  url: URLS_API.HOTEL,
  response: null,
  method: 'PUT',
};

export const MOCK_GET_HOTEL_SUCCESS: IMock<IHotelDetails> = {
  url: URLS_API.HOTEL,
  response: {
    id: 4,
    name: 'Hotel Simpsons',
    address: 'Avenida Siempreviva 742',
    phone: '3009085672',
    rooms: [
      {
        id: 1,
        allowed_guests: 5,
        price: 100.0,
        size: EHOTEL_ROOM_SIZE.QUADRUPLE,
        tax: 15.0,
        type: EHOTEL_ROOM_TYPE.GRAN_SUITE,
      },
      {
        id: 2,
        allowed_guests: 4,
        price: 80.0,
        size: EHOTEL_ROOM_SIZE.DOUBLE,
        tax: 12.0,
        type: EHOTEL_ROOM_TYPE.SUITE,
      },
      {
        id: 3,
        allowed_guests: 2,
        price: 60.0,
        size: EHOTEL_ROOM_SIZE.INDIVIDUAL,
        tax: 10.0,
        type: EHOTEL_ROOM_TYPE.JUNIOR_SUITE,
      },
    ],
  },
  method: 'GET',
};
