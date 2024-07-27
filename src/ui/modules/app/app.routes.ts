import { Routes } from '@angular/router';
import { APP_ROUTES } from 'src/domain/constants/routes.constant';
import { AppComponent } from './components/app/app.component';

function isAdminRol() {
  // TODO: Implement this in a guard
  return true;
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.ADMIN.PATH,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.ADMIN.PATH,
    canActivate: [isAdminRol],
    loadChildren: () =>
      import('../admin/admin.routes').then((mod) => mod.ADMIN_ROUTES),
  },
];
