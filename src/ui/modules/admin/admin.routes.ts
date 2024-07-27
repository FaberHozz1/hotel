import { Route } from '@angular/router';
import { HotelsComponent } from './components/hotels/hotels.component';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';

const ROUTES = APP_ROUTES.ADMIN.CHILDREN;

export const ADMIN_ROUTES: Route[] = [
  { path: '', redirectTo: ROUTES.HOTELS.PATH, pathMatch: 'full' },
  {
    path: ROUTES.HOTELS.PATH,
    component: HotelsComponent,
  },
];
