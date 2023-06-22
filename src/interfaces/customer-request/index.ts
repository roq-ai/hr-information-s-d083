import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CustomerRequestInterface {
  id?: string;
  customer_id?: string;
  company_id?: string;
  request_data: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface CustomerRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  company_id?: string;
  request_data?: string;
}
