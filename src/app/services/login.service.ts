import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor() { }

  save(credentials: any): void {
    localStorage.setItem("token",btoa(`${credentials.username}:${credentials.password}`));
  }

  getAuthHeaders():HttpHeaders {
    let token = localStorage.getItem("token");
    if(token){
      return new HttpHeaders({"Authorization": "Basic " + localStorage.getItem("token")})
    }

  }
}
