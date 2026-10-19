import { Routes } from '@angular/router';
import { ForgotPasswordPage } from './pages/auth/forgot-password-page/forgot-password-page';

import { authGuard } from './guards/auth.guard';

import { LoginPage } from './pages/auth/login-page/login-page';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';

import { RegisterPage } from './pages/auth/register-page/register-page';
import { DashboardPage } from './pages/dashboard/dashboard-page/dashboard-page';
import { ComponentLibraryPage } from './pages/dashboard/component-library-page/component-library-page';
import { IndexPage } from './pages/index-page/index-page';
import { SettingsPage } from './pages/dashboard/settings-page/settings-page';
import { CustomersPage } from './pages/dashboard/customers-page/customers-page';
import { ContractsPage } from './pages/dashboard/contracts-page/contracts-page';
import { ContactSubmissionsPage } from './pages/dashboard/contact-submissions-page/contact-submissions-page';
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
      {
        path: 'passwort-vergessen',
        component: ForgotPasswordPage,
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
      {
        path: 'kunden',
        component: CustomersPage,
		canActivate: [authGuard]
      },
      {
        path: 'vertraege',
        component: ContractsPage,
		canActivate: [authGuard]
      },
      {
        path: 'kontaktanfragen',
        component: ContactSubmissionsPage,
		canActivate: [authGuard]
      },
      {
        path: 'einstellungen',
        component: SettingsPage,
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
