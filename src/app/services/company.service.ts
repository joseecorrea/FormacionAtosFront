import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AlertService } from '../components/alerts/alert.service';
import { Company } from '../models/company/company';
import { CommaExpr } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type','application/json')
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  companiesUrl: string = 'http://localhost:8090/companies';

  constructor(private http: HttpClient,private alertS: AlertService) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl)
    .pipe(catchError(error  => {
      this.alertS.error(`Error al consultar las compañias: "${error.message}"`,{autoClose:false,keepAfterRouteChange:false});
      return throwError(error)
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
