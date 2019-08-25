/* tslint:disable:variable-name */
import {Role} from './role';
import {CustomerStatus} from './CustomerStatus';

export class Customer {
    name: string;
    email: string;
    role: Role;
    id: number;
    user_id: number;
    address: string;
    phone_number: string;
    license_number: string;
    status: CustomerStatus;
    customer_id: number;
    number: string;
    exp_date: string;
}
