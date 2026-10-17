import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';

import { LoginPage } from './pages/auth/login-page/login-page';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';

import { RegisterPage } from './pages/auth/register-page/register-page';
import { DashboardPage } from './pages/dashboard/dashboard-page/dashboard-page';
import { ComponentLibraryPage } from './pages/dashboard/component-library-page/component-library-page';
import { IndexPage } from './pages/index-page/index-page';

export const routes: Routes = [
  {
    path: '',
    component: IndexPage,
  },
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
        path: 'registrierung',
        component: RegisterPage,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardLayout,
	canActivate: [authGuard],
    children: [
      {
        path: '',
        component: DashboardPage,
		canActivate: [authGuard]
      },
      {
        path: 'component-library',
        component: ComponentLibraryPage,
		canActivate: [authGuard]
      },
    ],
  },
  // Fallback redirect
  {
    path: '**',
    redirectTo: '',
  },
];
