import { Routes } from '@angular/router';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: APP_ROUTES.ADMIN.PATH,
    loadChildren: () =>
      import('../admin/admin.routes').then((mod) => mod.ADMIN_ROUTES),
  },
  {
    path: APP_ROUTES.CUSTOMER.PATH,
    loadChildren: () =>
      import('../customer/customer.routes').then((mod) => mod.CUSTOMER_ROUTES),
  },
];
