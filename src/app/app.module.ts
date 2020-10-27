import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { JuegoComponent } from './components/juego/juego.component';
import { JuegoService } from './services/juego.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    JuegoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    JuegoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
