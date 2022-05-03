import { Owner } from "./owner";
import { Visitor } from "./visitor";

export class Visit {
    cod_visita: number;
    fecha_reg_visita: Date;
    fecha_llegada_visita: Date;
    fecha_salida_visita: Date;
    visitante: Visitor;
    propietario: Owner;
}
