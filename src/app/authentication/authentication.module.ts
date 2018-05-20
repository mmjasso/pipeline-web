import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
  ],
  providers: [
    AuthenticationService,
  ],
  exports: [
    LoginComponent,
    ForgotPasswordComponent,
  ]
})
export class AuthenticationModule { }
