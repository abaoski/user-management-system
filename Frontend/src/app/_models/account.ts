import { Role } from './role';

export class Account {
    id: string = '';
    title: string = '';
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    role: Role = Role.User;
    jwtToken?: string;
    isDeleting?: boolean;
}
