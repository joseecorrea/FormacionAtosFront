import { RolUsuario } from 'src/app/enums/rol-usuario.enum';
import { Cliente } from '../cliente/cliente';

export class Rol {
    rolUsuario: RolUsuario;
    clientes: Cliente[];
}
