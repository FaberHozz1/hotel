export const APP_ROUTES = {
  ADMIN: {
    PATH: 'admin',
    URL: 'admin',
    CHILDREN: {
      LIST_HOTELS: {
        PATH: 'list-hotels',
        URL: 'admin/list-hotels',
      },
      HOTEL: {
        PATH: 'hotel/:id',
        URL: 'admin/hotel/',
      },
      LIST_BOOKINGS: {
        PATH: 'list-bookings',
        URL: 'admin/list-bookings',
      },
      BOOKING_DETAIL: {
        PATH: 'booking-detail',
        URL: 'admin/booking-detail',
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
