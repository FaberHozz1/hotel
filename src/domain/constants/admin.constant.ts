import { APP_ROUTES } from './routes.constant';

export const ADMIN_MENU = [
  {
    name: 'Hoteles',
    icon: 'hotel',
    url: APP_ROUTES.ADMIN.CHILDREN.HOTELS.URL,
  },
  {
    name: 'Reservas',
    icon: 'concierge',
    url: APP_ROUTES.ADMIN.CHILDREN.BOOKINGS.URL,
  },
];
