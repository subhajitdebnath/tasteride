import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthIndependentComponent } from './auth-independent/auth-independent.component';
import { PreAuthComponent } from './pre-auth/pre-auth.component';
import { loginGuard } from './core/guards/login.guard';
import { PostAuthComponent } from './post-auth/post-auth.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthIndependentComponent,
    loadChildren: () => import('./auth-independent/auth-independent.module').then(m => m.AuthIndependentModule)
  },
  {
    path: 'auth',
    component: PreAuthComponent,
    canActivate: [loginGuard],
    loadChildren: () => import('./pre-auth/pre-auth.module').then(m => m.PreAuthModule)
  },
  {
    path: 'user',
    component: PostAuthComponent,
    canActivate: [authGuard],
    loadChildren: () => import('./post-auth/post-auth.module').then(m => m.PostAuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
