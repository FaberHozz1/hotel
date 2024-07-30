import { URLS_API } from 'src/domain/constants/url-api.constant';
import { EDOCUMENT_TYPE, EGENDER } from 'src/domain/enums/booking.enum';
import { IBookingList } from 'src/domain/interfaces/booking.interface';
import { IMock } from 'src/domain/interfaces/mock.interface';

export const MOCK_GET_BOOKINGS_SUCCESS: IMock<IBookingList> = {
  url: URLS_API.BOOKINGS,
  response: {
    bookings: [
      {
        id: 1,
        hotel_id: 4,
        hotel_name: 'Hotel Simpsons',
        hotel_address: 'Avenida Siempreviva 742',
        hotel_phone: '3009085672',
        hotel_active: true,
        guest_id: 8,
        guest_birthdate: new Date(22 / 10 / 1996),
        guest_name: 'Faber Herrera',
        guest_gender: EGENDER.MALE,
        guest_document_type: EDOCUMENT_TYPE.CC,
        guest_document_number: '123123123',
        guest_email: 'faberherrera@gmail.com',
        guest_phone: '3016616123',
        date_in: new Date(5 / 8 / 2024),
        date_out: new Date(15 / 8 / 2024),
      },
      {
        id: 2,
        hotel_id: 4,
        hotel_name: 'Hotel Simpsons',
        hotel_address: 'Avenida Siempreviva 742',
        hotel_phone: '3009085672',
        hotel_active: true,
        guest_id: 9,
        guest_birthdate: new Date(22 / 10 / 1996),
        guest_name: 'Homero Simpson',
        guest_gender: EGENDER.MALE,
        guest_document_type: EDOCUMENT_TYPE.CC,
        guest_document_number: '123123123',
        guest_email: 'homerjsimpson@gmail.com',
        guest_phone: '3016616123',
        date_in: new Date(5 / 8 / 2024),
        date_out: new Date(15 / 8 / 2024),
      },
    ],
  },
  method: 'GET',
};
