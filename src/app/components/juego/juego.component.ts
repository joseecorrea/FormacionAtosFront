import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game/game';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juegos: Game[] = [{idJuego: 1, titulo: 'Maniac Mansion', categoria: 'Aventura Gráfica', fechaLanzamiento: '1987-10-05', pegi: 12, precio: 5},
  {idJuego: 2, titulo: 'Doom', categoria: 'Shooter', fechaLanzamiento: '1993-12-01', pegi: 15, precio: 10},
  {idJuego: 3, titulo: 'Counter-Strike', categoria: 'Shooter', fechaLanzamiento: '2000-11-09', pegi: 16, precio: 15},
  {idJuego: 4, titulo: 'Fortnite', categoria: 'MMO / MOBA ?', fechaLanzamiento: '2017-07-21', pegi: 16, precio: 20}]

  showID: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
