import { Route } from '@angular/router';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';
import { ReservationsComponent } from './reservations/reservations.component';

const ROUTES = APP_ROUTES.CUSTOMER.CHILDREN;

export const CUSTOMER_ROUTES: Route[] = [
  { path: '', redirectTo: ROUTES.RESERVE.PATH, pathMatch: 'full' },
  {
    path: ROUTES.RESERVE.PATH,
    component: ReservationsComponent,
  },
];
