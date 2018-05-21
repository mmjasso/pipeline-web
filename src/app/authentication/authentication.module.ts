import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import { AuthenticationService } from './authentication.service';
import { AuthRoutingModule } from './authentication.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ],
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    ResetPasswordComponent,
  ],
  providers: [
    AuthenticationService,
  ],
  exports: [
    ForgotPasswordComponent,
    LoginComponent,
    ResetPasswordComponent
  ]
})
export class AuthenticationModule { }
