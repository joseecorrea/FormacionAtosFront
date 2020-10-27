import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game/game';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juegos: Game[];

  showID: Boolean = false;

  switchID(): void {
    this.showID = !this.showID;
  }

  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.juegoService.getJuegos().subscribe( juegosJSON =>
      this.juegos = juegosJSON
    );
  }

}
