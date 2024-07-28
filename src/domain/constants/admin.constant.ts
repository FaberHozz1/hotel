import { APP_ROUTES } from './routes.constant';

export const ADMIN_MENU = [
  {
    name: 'Hoteles',
    icon: 'hotel',
    url: APP_ROUTES.ADMIN.CHILDREN.HOTELS.URL,
  },
  {
    name: 'Reservas',
    icon: 'room_service',
    url: APP_ROUTES.ADMIN.CHILDREN.BOOKINGS.URL,
  },
];
