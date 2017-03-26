import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let employees = [
			{
				id: 1,
				code: '000001',
				first_name: 'Oliver',
				last_name: 'Bernet',
				dob: '19-01-1989',
				pob: 'Sydney',
				address: 'Sydney rd new south wales Australia',
				grade: '1A',
				division: 'Operational',
				assignments: [
					{
						id: 1,
						job: 'Officer',
						organization: 'IT Departement',
						grade: '3A',
						start_date: '1-01-2015',
						end_date: '31-12-4217',
						employee_id: 1
					}
				]
			},
			{
				id: 2,
				code: '000001',
				first_name: 'Oliver',
				last_name: 'Bernet',
				dob: '19-01-1989',
				pob: 'Sydney',
				address: 'Sydney rd new south wales Australia',
				grade: '1A',
				division: 'Operational',
				assignments: [
					{
						id: 2,
						job: 'Officer',
						organization: 'IT Departement',
						grade: '3A',
						start_date: '1-01-2015',
						end_date: '31-12-4217',
						employee_id: 2
					}
				]
			},
			{
				id: 3,
				code: '000001',
				first_name: 'Oliver',
				last_name: 'Bernet',
				dob: '19-01-1989',
				pob: 'Sydney',
				address: 'Sydney rd new south wales Australia',
				grade: '1A',
				division: 'Operational',
				assignments: [
					{
						id: 3,
						job: 'Officer',
						organization: 'IT Departement',
						grade: '3A',
						start_date: '1-01-2015',
						end_date: '31-12-4217',
						employee_id: 3
					}
				]
			},
			{
				id: 4,
				code: '000001',
				first_name: 'Oliver',
				last_name: 'Bernet',
				dob: '19-01-1989',
				pob: 'Sydney',
				address: 'Sydney rd new south wales Australia',
				grade: '1A',
				division: 'Operational',
				assignments: [
					{
						id: 4,
						job: 'Officer',
						organization: 'IT Departement',
						grade: '3A',
						start_date: '1-01-2015',
						end_date: '31-12-4217',
						employee_id: 4
					}
				]
			},
			{
				id: 5,
				code: '000001',
				first_name: 'Oliver',
				last_name: 'Bernet',
				dob: '19-01-1989',
				pob: 'Sydney',
				address: 'Sydney rd new south wales Australia',
				grade: '1A',
				division: 'Operational',
				assignments: [
					{
						id: 5,
						job: 'Officer',
						organization: 'IT Departement',
						grade: '3A',
						start_date: '1-01-2015',
						end_date: '31-12-4217',
						employee_id: 5
					}
				]
			},
			{
				id: 6,
				code: '000001',
				first_name: 'Oliver',
				last_name: 'Bernet',
				dob: '19-01-1989',
				pob: 'Sydney',
				address: 'Sydney rd new south wales Australia',
				grade: '1A',
				division: 'Operational',
				assignments: [
					{
						id: 6,
						job: 'Officer',
						organization: 'IT Departement',
						grade: '3A',
						start_date: '1-01-2015',
						end_date: '31-12-4217',
						employee_id: 6
					}
				]
			},
		];
		return { employees };
	}
}
