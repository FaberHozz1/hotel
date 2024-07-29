import { URLS_API } from 'src/domain/constants/url-api.constant';
import { IMock } from 'src/domain/interfaces/mock.interface';

export const MOCK_POST_HOTEL_ROOM_SUCCESS: IMock<null> = {
  url: URLS_API.ROOM,
  response: null,
  method: 'POST',
};

export const MOCK_PUT_HOTEL_ROOM_SUCCESS: IMock<null> = {
  url: URLS_API.ROOM,
  response: null,
  method: 'PUT',
};
