
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../authentication/login/login.component';
import { ForgotPasswordComponent } from '../authentication/forgot-password/forgot-password.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
