import { AuthenticationService } from './../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  public resetPassword(): void {
    console.log('request password!');
    this.authService.requestPassword();
  }

  protected createForm(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required ],
    });
  }
}
