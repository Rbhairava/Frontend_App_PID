import { Department } from "./department";
import { User } from "./user";

export class Mascot {
    id: number;
    name: string;
    sex: string;
    race: string;
    user: User;
    department: Department;
}
