import { Route } from '@angular/router';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';
import { MenuComponent } from './layouts/menu/menu.component';
import { ListHotelsComponent } from './features/hotels/pages/list-hotels/list-hotels.component';
import { HotelComponent } from './features/hotels/pages/hotel/hotel.component';
import { ListBookingsComponent } from './features/bookings/pages/list-bookings/list-bookings.component';
import { BookingDetailComponent } from './features/bookings/pages/booking-detail/booking-detail.component';

const ROUTES = APP_ROUTES.ADMIN.CHILDREN;

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', redirectTo: ROUTES.LIST_HOTELS.PATH, pathMatch: 'full' },
      {
        path: ROUTES.LIST_HOTELS.PATH,
        component: ListHotelsComponent,
      },
      {
        path: ROUTES.HOTEL.PATH,
        component: HotelComponent,
      },
      {
        path: ROUTES.LIST_BOOKINGS.PATH,
        component: ListBookingsComponent,
      },
      {
        path: ROUTES.BOOKING_DETAIL.PATH,
        component: BookingDetailComponent,
      },
    ],
  },
];
