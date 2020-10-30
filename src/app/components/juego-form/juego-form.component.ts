import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaJuego } from 'src/app/enums/categoria-juego.enum';
import { Company } from 'src/app/models/company/company';
import { Game } from 'src/app/models/game/game';
import { CompanyService } from 'src/app/services/company.service';
import { JuegoService } from 'src/app/services/juego.service';
import { AlertService } from '../alerts/alert.service';

@Component({
  selector: 'app-add-juego',
  templateUrl: './juego-form.component.html',
  styleUrls: ['./juego-form.component.css']
})
export class JuegoFormComponent implements OnInit {

  title: String;
  juego: Game;
  companies: Company[];

  constructor(private juegoService: JuegoService,private router: Router, private companyService: CompanyService, private activatedRoute: ActivatedRoute,private alertS: AlertService) { }

  ngOnInit(): void {
    this.loadJuegos();
    this.loadCompanies();
  }

  keys() : Array<string> {
    var keys = Object.keys(CategoriaJuego);
    return keys.slice(keys.length / 2);
  }

  compareCompany(companyToCompare: Company,companySelected: Company) :Boolean {
    if(!companyToCompare || !companySelected){
      return false;
    }
    return companyToCompare.idCompany === companySelected.idCompany;
  }

  loadCompanies() : void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    })
  }

  loadJuegos() :void {
    this.activatedRoute.params.subscribe(params=> {
      let id = params["id"];
      if (id){
        this.title = "Editar Juego";
        this.juegoService.getJuego(id).subscribe(juego => {
          this.juego = juego
        })
      }else{
        this.title = "Crear Juego";
        this.juego = new Game();
      }
    })
  }

  public create():void {
    console.log(this.juego)
    this.juegoService.addJuego(this.juego).subscribe(resp => {
      this.alertS.success(`Juego Creado Correctamente: ${resp.titulo} con ID: ${resp.idJuego}`,{autoClose:true,keepAfterRouteChange:false});
      this.router.navigate(['/juegos'])
    })
  }

  public update(juego: Game):void {
    this.juegoService.updateJuego(juego).subscribe(resp => {
      this.alertS.success(`Juego Editado Correctamente: ${resp.titulo} con ID: ${resp.idJuego}`,{autoClose:true,keepAfterRouteChange:false});
      this.router.navigate(['/juegos'])
    })
  }




}
