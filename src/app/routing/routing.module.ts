import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [{
  // {path: 'login', Component: }
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
