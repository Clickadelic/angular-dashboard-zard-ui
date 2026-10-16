import { Routes } from '@angular/router';
import { LoginPage } from './pages/auth/login-page/login-page';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [

  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginPage,
      },
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
      },
    ],
  },
  // Fallback redirect
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];