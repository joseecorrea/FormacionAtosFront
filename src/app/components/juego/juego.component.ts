import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game/game';
import { JuegoService } from 'src/app/services/juego.service';
import { faEdit, faPlusSquare,faEye,faEyeSlash, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { AlertService } from '../alerts/alert.service';
import { Router } from '@angular/router';


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
    faGamepad : faGamepad,
    faTrashAlt : faTrashAlt
  }

  juegos: Game[];

  showID: Boolean = false;

  switchID(): void {
    this.showID = !this.showID;
  }

  constructor(private juegoService: JuegoService, private alertS: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.loadGames()
  }

  loadGames(): void{
    this.juegoService.getJuegos().subscribe( juegosJSON =>
      this.juegos = juegosJSON
    );
  }

  public delete(juego: Game):void {
    if(confirm(`¿Esta seguro de que desea eliminar el juego con nombre: ${juego.titulo}`)){
      this.juegoService.deleteJuego(juego.idJuego).subscribe(resp => {
        this.alertS.success(`Juego Eliminado Correctamente`,{autoClose:true,keepAfterRouteChange:false});
        this.loadGames()
      })
    }
  }
}
