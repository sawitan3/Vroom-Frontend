import {Role} from './role';

export class LoginResponse {
    token: string;
    id: string;
    role: Role;
}
