export const APP_ROUTES = {
  ADMIN: {
    PATH: 'admin',
    URL: 'admin',
    CHILDREN: {
      HOTELS: {
        PATH: 'hotels',
        URL: 'admin/hotels',
      },
      BOOKINGS: {
        PATH: 'bookings',
        URL: 'admin/bookings',
      },
    },
  },
  CUSTOMER: {
    PATH: 'customer',
    URL: 'customer',
    CHILDREN: {
      RESERVE: {
        PATH: 'reserve',
        URL: 'customer/reserve',
      },
    },
  },
};
