import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  public login(): any {
    console.log('service: login!');
    return '';
  }
  public requestPassword(): any {
    console.log('service: request password!');
    return '';
  }
}
