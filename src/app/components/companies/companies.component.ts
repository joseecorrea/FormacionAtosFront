import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company/company';
//import { COMPANIES } from 'src/app/components/companies/companies.json';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe( companies =>
      this.companies = companies
    )
  }

}
