export const APP_ROUTES = {
  ADMIN: {
    PATH: 'admin',
    URL: 'admin',
    CHILDREN: {
      HOTELS: {
        PATH: 'hotels',
        URL: 'admin/hotels',
      },
      RESERVATIONS: {
        PATH: 'reservations',
        URL: 'admin/reservations',
      },
    },
  },
  CUSTOMER: {
    PATH: 'customer',
    URL: 'customer',
    CHILDREN: {
      RESERVATIONS: {
        PATH: 'reservations',
        URL: 'customer/reservations',
      },
    },
  },
};
