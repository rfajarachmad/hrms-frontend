import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { DashboardComponent }   from './controller/dashboard.component';
import { EmployeeComponent }  from './controller/employee.component';
import { EmployeeDetailComponent }  from './controller/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'employees',     component: EmployeeComponent },
  { path: 'employees/new',     component: EmployeeDetailComponent },
  { path: 'employees/:id',     component: EmployeeDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), FormsModule ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}