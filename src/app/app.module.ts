import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { JuegoComponent } from './components/juego/juego.component';
import { JuegoService } from './services/juego.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alerts/alert.component';
import { AlertService } from './components/alerts/alert.service';
import { RouterModule, Routes } from '@angular/router';
import { JuegoFormComponent } from './components/juego-form/juego-form.component';
import { FormsModule } from '@angular/forms';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesFormComponent } from './components/companies-form/companies-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';



const ROUTES: Routes = [
  {path:"",redirectTo: "/login", pathMatch: "full"},
  {path:"juegos",component: JuegoComponent},
  {path:"juegos/form",component: JuegoFormComponent},
  {path:"juegos/form/:id",component: JuegoFormComponent},
  {path:"companies",component: CompaniesComponent},
  {path:"companies/form",component: CompaniesFormComponent},
  {path:"login",component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    JuegoComponent,
    AlertComponent,
    JuegoFormComponent,
    CompaniesComponent,
    CompaniesFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    JuegoService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
