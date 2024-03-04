import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'otp',
        loadChildren: () => import('./../dashboard/otp/otp.routes').then(m => m.routes),
      },
      {
        path: 'cargue-cvc',
        loadChildren: () => import('./../dashboard/upload-cvc/cvc.routes').then(m => m.routes),
      },
      {
        path: 'cargue-listas',
        loadChildren: () => import('./../dashboard/upload-list/list.routes').then(m => m.routes),
      },
    ]
  },

];
