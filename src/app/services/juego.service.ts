import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { JUEGOS } from '../components/juego/juegos.json';
import { catchError } from 'rxjs/operators';
import { Game } from '../models/game/game';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type','application/json')
}

@Injectable()
export class JuegoService {

  juegosUrl: string = 'http://localhost:8090/juegos';

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError('server error.');
  }

  getJuegos(): Observable<Game[]> {
    return this.http.get<Game[]>(this.juegosUrl);
  }
}
