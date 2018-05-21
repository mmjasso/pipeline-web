import { EmployeesComponent } from './dashboard/employees/employees.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidatesComponent } from './dashboard/candidates/candidates.component';
import { CompaniesComponent } from './dashboard/companies/companies.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'employees', component: EmployeesComponent },
      { path: 'candidates', component: CandidatesComponent },
      { path: 'companies', component: CompaniesComponent },
    ]
   },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule { }

