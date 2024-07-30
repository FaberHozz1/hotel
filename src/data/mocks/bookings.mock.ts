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
        hotel: {
          id: 4,
          name: 'Hotel Simpsons',
          address: 'Avenida Siempreviva 742',
          phone: '3009085672',
          active: true,
        },
        guest: {
          id: 8,
          birthdate: new Date(22 / 10 / 1996),
          name: 'Faber Herrera',
          gender: EGENDER.MALE,
          document_type: EDOCUMENT_TYPE.CC,
          document_number: '123123123',
          email: 'faberherrera@gmail.com',
          phone: '3016616123',
        },
        date_in: new Date(5 / 8 / 2024),
        date_out: new Date(15 / 8 / 2024),
      },
      {
        id: 2,
        hotel: {
          id: 4,
          name: 'Hotel Simpsons',
          address: 'Avenida Siempreviva 742',
          phone: '3009085672',
          active: true,
        },
        guest: {
          id: 9,
          birthdate: new Date(22 / 10 / 1996),
          name: 'Homero Simpson',
          gender: EGENDER.MALE,
          document_type: EDOCUMENT_TYPE.CC,
          document_number: '123123123',
          email: 'homerjsimpson@gmail.com',
          phone: '3016616123',
        },
        date_in: new Date(5 / 8 / 2024),
        date_out: new Date(15 / 8 / 2024),
      },
    ],
  },
  method: 'GET',
};
