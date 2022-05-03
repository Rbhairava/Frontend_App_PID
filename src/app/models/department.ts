import { Owner } from "./owner";

export class Department {
    cod_propietario: number;
    num_departamento: number;
    piso_departamento: number;
    estado: number;
    condiciones_departamento: string;
    metros_cuadrados: number;
    tipo_departamento: number;
    propietario: Owner;
}
