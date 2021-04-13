import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { TablaComponent } from './tabla/tabla.component';
import { CashComponent } from './cash/cash.component';
import { LacteosComponent } from './lacteos/lacteos.component';
import { LegumbresComponent } from './legumbres/legumbres.component';
import { CarnicosComponent } from './carnicos/carnicos.component';
import { VerdurasComponent } from './verduras/verduras.component';
import { CartComponent } from './cart/cart.component';
import { DetalleproductosComponent } from './detalleproductos/detalleproductos.component';
import { Nav2Component } from './nav2/nav2.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    InicioComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    InicioSesionComponent,
    TablaComponent,
    CashComponent,
    LacteosComponent,
    LegumbresComponent,
    CarnicosComponent,
    VerdurasComponent,
    CartComponent,
    DetalleproductosComponent,
    Nav2Component,
    PerfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
