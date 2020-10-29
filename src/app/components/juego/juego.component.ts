import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game/game';
import { JuegoService } from 'src/app/services/juego.service';
import { faEdit, faPlusSquare,faEye,faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  icons:any = {
    faEdit : faEdit,
    faPlusSquare : faPlusSquare,
    faEye : faEye,
    faEyeSlash : faEyeSlash,
    faGamepad : faGamepad
  }

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
