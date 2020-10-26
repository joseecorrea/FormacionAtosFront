import { Rol } from '../rol/rol';
import { Stock } from '../stock/stock';

export class Cliente {
    nombre: String;
    username: String;
    password: String;
    documentacion: String;
    correo: String;
    fechaNacimiento: Date;
    stockDTOs: Stock[];
    roles: Rol;
}
