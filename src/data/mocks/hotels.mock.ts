import { URLS_API } from 'src/domain/constants/url-api.constant';
import { IHotelsResponse } from 'src/domain/interfaces/hotel.interface';
import { IMock } from 'src/domain/interfaces/mock.interface';

export const MOCK_GET_HOTELS_SUCCESS: IMock<IHotelsResponse> = {
  url: URLS_API.HOTELS,
  response: {
    hotels: [
      { id: 1, name: 'Hydrogen', address: 1.0079, phone: 'H' },
      { id: 2, name: 'Helium', address: 4.0026, phone: 'He' },
      { id: 3, name: 'Lithium', address: 6.941, phone: 'Li' },
      { id: 4, name: 'Beryllium', address: 9.0122, phone: 'Be' },
      { id: 5, name: 'Boron', address: 10.811, phone: 'B' },
      { id: 6, name: 'Carbon', address: 12.0107, phone: 'C' },
      { id: 7, name: 'Nitrogen', address: 14.0067, phone: 'N' },
      { id: 8, name: 'Oxygen', address: 15.9994, phone: 'O' },
      { id: 9, name: 'Fluorine', address: 18.9984, phone: 'F' },
      { id: 10, name: 'Neon', address: 20.1797, phone: 'Ne' },
    ],
  },
  method: 'GET',
};
