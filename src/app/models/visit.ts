import { User } from "./user";

export class Visit {
    id: number;
    name: string;
    dni: string;
    phone: string;
    entryDate: Date;
    exitDate: Date;
    status: number;
    user: User;    
}
