/* tslint:disable:variable-name */
import {Role} from './role';

export class LoginResponse {
    token: string;
    id?: string;
    user_id?: string;
    customer_id?: string;
    role: Role;
}
