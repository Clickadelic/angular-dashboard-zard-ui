import { Routes } from '@angular/router';
import { LoginPage } from './pages/auth/login-page/login-page';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { RegisterPage } from './pages/auth/register-page/register-page';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
export const routes: Routes = [

  // Auth Routes
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        component: LoginPage,
      },
      {
        path: 'registrieren',
        component: RegisterPage,
      },
    ],
  },
  {
	path: 'dashboard',
	component: DashboardLayout
  },
  // Fallback redirect
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];