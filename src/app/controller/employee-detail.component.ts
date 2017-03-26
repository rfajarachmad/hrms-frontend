import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Employee } from '../model/employee'
import { Assignment } from '../model/assignment'
import { EmployeeService } from '../service/employee.service'

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'employee-detail',
	templateUrl: './templates/employee-detail.component.html',
	providers: [EmployeeService]
})
export class EmployeeDetailComponent implements OnInit {

	@Input() employee: Employee;
	@Input() assignments: Assignment[];

	tab: string = 'basic';

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private employeeService: EmployeeService
	) { }

	ngOnInit(): void {
		let id = +this.route.snapshot.params['id'];
		if (id) {
			this.route.params.switchMap(
				(params: Params) => this.employeeService.getEmployee(+params['id'])
			).subscribe(employee => this.employee = employee);
		}
		this.employee = new Employee();
	}

	goBack(): void {
		this.location.back();
	}

	onSubmit(): void {
		if (this.employee.id) {
			this.employeeService.update(this.employee);
		} else {
			this.employeeService.create(this.employee);
		}
		this.goBack();
	}
	onClickTab(tab: string): void {
		this.tab = tab;
		this.renderTab(tab);
	}

	renderTab(tab: string): void {
		if (tab === 'assignment') {
			let id = +this.route.snapshot.params['id'];
			if (id) {
				this.route.params.switchMap(
					(params: Params) => this.employeeService.getAssignments(+params['id'], 0, 0)
				).subscribe(assignments => this.assignments = assignments);
			}
		}
	}
}
