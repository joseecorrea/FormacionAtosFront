import { EstadoJuego } from 'src/app/enums/estado-juego.enum';
import { Cliente } from '../cliente/cliente';
import { Game } from '../game/game';
import { Tienda } from '../tienda/tienda';

export class Stock {
    referencia: String;
    estado: EstadoJuego;
    juegoDTO: Game;
    tiendaDTO: Tienda
    clienteDTO: Cliente;
}
