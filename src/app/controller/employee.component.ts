import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../model/employee'
import { EmployeeService } from '../service/employee.service'


@Component({
	selector: 'employee',
	templateUrl: './templates/employee.component.html',
	providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

	private pageSize = 2;
	
	employees: Employee[];
	q: string;
	page: number = 1;
	totalPage: number = 2;
	

	constructor(
		private router: Router,
		private employeeService: EmployeeService
	) { }

	ngOnInit(): void {
		this.employeeService.getEmployees(this.page, this.pageSize).then(
			employees => this.render(employees)
		)
	}

	render(employees: Employee[]): void {
		this.employees = employees;
		this.totalPage = this.employees.length / this.pageSize;
	}

	gotoDetail(id: number): void {
		this.router.navigate(['/employees', id]);
	}

	search(): void {
		console.log("search" + this.q);
		this.employeeService.search(this.q, this.page, this.pageSize).then(
			employees => this.render(employees)
		)
	}
}
