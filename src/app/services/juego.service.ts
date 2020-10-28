import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Game } from '../models/game/game';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertService } from '../components/alerts/alert.service';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type','application/json')
}

@Injectable()
export class JuegoService {

  juegosUrl: string = 'http://localhost:8090/juegos';

  constructor(private http: HttpClient,private alertS: AlertService) { }

  getJuegos(): Observable<Game[]> {
    return this.http.get<Game[]>(this.juegosUrl)
    .pipe(catchError(error  => {
        this.alertS.error(`Error al consultar los juegos: "${error.message}"`,{autoClose:false,keepAfterRouteChange:false});
        return throwError(error)
    }))
  }

  addJuego(juego:Game): Observable<Game[]> {
    return this.http.post<Game[]>(this.juegosUrl,juego,httpOptions)
    .pipe(catchError(error  => {
      this.alertS.error(`Error al crear el juego: "${error.message}"`,{autoClose:false,keepAfterRouteChange:false});
      return throwError(error)
  }))
  }
}
