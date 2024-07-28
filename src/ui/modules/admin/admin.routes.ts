import { Route } from '@angular/router';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';
import { HotelsComponent } from './components/hotels/hotels.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { BookingsComponent } from './components/bookings/bookings.component';

const ROUTES = APP_ROUTES.ADMIN.CHILDREN;

export const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: MenuComponent,
    children: [
      { path: '', redirectTo: ROUTES.HOTELS.PATH, pathMatch: 'full' },
      {
        path: ROUTES.HOTELS.PATH,
        component: HotelsComponent,
      },
      {
        path: ROUTES.BOOKINGS.PATH,
        component: BookingsComponent,
      },
    ],
  },
];
