import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthIndependentComponent } from './auth-independent/auth-independent.component';
import { PreAuthComponent } from './pre-auth/pre-auth.component';
import { loginGuard } from './core/guards/login.guard';

const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },{
  //   path: 'dashboard',
  //   component: DashboardComponent
  // },{
  //   path: 'dashboard/:id',
  //   component: DashboardComponent
  // },
  {
    path: '',
    component: AuthIndependentComponent,
    loadChildren: () => import('./auth-independent/auth-independent.module').then(m => m.AuthIndependentModule)
  },
  {
    path: 'authentication',
    component: PreAuthComponent,
    canActivate: [loginGuard],
    loadChildren: () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
