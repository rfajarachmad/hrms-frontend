import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppComponent } from './controller/main.component';
import { DashboardComponent }   from './controller/dashboard.component';
import { EmployeeComponent } from './controller/employee.component';
import { EmployeeDetailComponent } from './controller/employee-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeComponent,
    EmployeeDetailComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }