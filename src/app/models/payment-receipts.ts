import { Tower } from "./tower";
import { TypeService } from "./type-service";
import { User } from "./user";

export class PaymentReceipts {
    id: number;
    amount: number;
    month: number;
    registrationDate: Date;
    paymentDate: Date;
    expirationDate: Date;
    status: number;
    typeService: TypeService;
    tower: Tower;
    user: User;
}
