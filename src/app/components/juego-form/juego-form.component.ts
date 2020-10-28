import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaJuego } from 'src/app/enums/categoria-juego.enum';
import { Game } from 'src/app/models/game/game';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-add-juego',
  templateUrl: './juego-form.component.html',
  styleUrls: ['./juego-form.component.css']
})
export class JuegoFormComponent implements OnInit {

  title: String = "Añadir Juego";
  juego: Game = new Game();

  constructor(private juegoService: JuegoService,private router: Router) { }

  ngOnInit(): void {
  }

  keys() : Array<string> {
    var keys = Object.keys(CategoriaJuego);
    return keys.slice(keys.length / 2);
}

  public create():void {
    this.juegoService.addJuego(this.juego).subscribe(resp => {
      this.router.navigate(['/juegos'])
    })
  }

}
