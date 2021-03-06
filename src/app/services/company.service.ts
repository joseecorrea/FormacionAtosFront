import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from '../components/alerts/alert.service';
import { Company } from '../models/company/company';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type','application/json'),
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companiesUrl: string = 'http://localhost:8090/companies';

  constructor(private http: HttpClient,private alertS: AlertService,private router: Router,private loginService: LoginService) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl,{headers:this.loginService.getAuthHeaders()})
    .pipe(catchError(error  => {
      if(error.status == 401){
        this.router.navigate(['/login'])
      }else{
        this.alertS.error(`Error al consultar las compañias: "${error.message}"`,{autoClose:false,keepAfterRouteChange:false});
        return throwError(error)
      }

    }))
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.companiesUrl,company,httpOptions)
    .pipe(catchError(error  => {
      this.alertS.error(`Error al crear la compañia: "${error.message}"`,{autoClose:false,keepAfterRouteChange:false});
      return throwError(error)
    }))
  }
}
