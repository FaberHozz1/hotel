import { Route } from '@angular/router';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';
import { MenuComponent } from './layouts/menu/menu.component';
import { BookingsComponent } from './features/bookings/bookings.component';
import { ListHotelsComponent } from './features/hotels/pages/list-hotels/list-hotels.component';
import { HotelComponent } from './features/hotels/pages/hotel/hotel.component';

const ROUTES = APP_ROUTES.ADMIN.CHILDREN;

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', redirectTo: ROUTES.HOTELS.PATH, pathMatch: 'full' },
      {
        path: ROUTES.HOTELS.PATH,
        component: ListHotelsComponent,
      },
      {
        path: ROUTES.HOTEL.PATH,
        component: HotelComponent,
      },
      {
        path: ROUTES.BOOKINGS.PATH,
        component: BookingsComponent,
      },
    ],
  },
];
