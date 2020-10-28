import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company/company';
import { CompanyService } from 'src/app/services/company.service';
import { CompaniesComponent } from '../companies/companies.component';

@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.css']
})
export class CompaniesFormComponent implements OnInit {

  title: String = "Añadir Compañia"

  company: Company = new Company();

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
  }

  create():void {
    this.companyService.addCompany(this.company).subscribe(resp => {
      this.router.navigate(['/companies'])
    })
  }

}
