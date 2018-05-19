import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AuthenticationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
