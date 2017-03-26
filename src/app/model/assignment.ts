import { Employee } from './employee';

export class Assignment {
	id: number;
	job: string;
	organization: string;
	grade: string;
	employee_id: number;
	employee: Employee;
}
