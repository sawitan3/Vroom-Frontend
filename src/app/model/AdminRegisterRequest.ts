import {Role} from './role';

export class AdminRegisterRequest {
    name: string;
    email: string;
    password: string;
    role: Role = Role.Admin;
}
