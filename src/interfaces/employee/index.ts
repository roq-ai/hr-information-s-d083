import { VacationRequestInterface } from 'interfaces/vacation-request';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id?: string;
  employment_data?: string;
  vacation_days?: number;
  payroll_data?: string;
  created_at?: any;
  updated_at?: any;
  vacation_request?: VacationRequestInterface[];
  user?: UserInterface;
  _count?: {
    vacation_request?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  employment_data?: string;
  payroll_data?: string;
}
