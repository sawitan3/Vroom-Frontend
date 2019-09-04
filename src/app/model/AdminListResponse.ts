import {Role} from './role';

export class AdminListResponse {
    admins: Array<AdminResponse>;
}

export class AdminResponse {
    name: string;
    email: string;
    role: Role;
}
