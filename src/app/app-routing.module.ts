import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';

const routes: Routes = [  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: LoginComponent },
  { path: 'sneakers', component: SneakersComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
