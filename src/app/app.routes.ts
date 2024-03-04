import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full' },
  { path: 'iniciar-sesion', component: LoginComponent },
  {
    path: 'panel',
    loadChildren: () => import('./modules/dashboard/dashboard.routes').then(m => m.routes),
  },
];
