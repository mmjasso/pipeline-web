import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardNavigationComponent } from './navigation/navigation.component';
import { EmployeesComponent } from './dashboard/employees/employees.component';
import { CandidatesComponent } from './dashboard/candidates/candidates.component';
import { CompaniesComponent } from './dashboard/companies/companies.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, DashboardNavigationComponent, EmployeesComponent, CandidatesComponent, CompaniesComponent],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
