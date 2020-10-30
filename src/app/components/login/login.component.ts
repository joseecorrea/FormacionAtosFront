import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials : any = {};

  icons:any = {
    faGamepad : faGamepad
  }

  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  login():void {
    this.loginService.save(this.credentials)
    this.router.navigate(["/companies"])
  }

}
