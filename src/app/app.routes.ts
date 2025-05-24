import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sneakers', component: SneakersComponent },
  { path: 'order', component: OrderComponent },
];
