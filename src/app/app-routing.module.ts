import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroverifiComponent } from './registroverifi/registroverifi.component';
import { Inicio2Component } from './inicio2/inicio2.component'
import { BodyComponent } from './body/body.component';
import { CarritoComponent } from './carrito/carrito.component'
import {TablaComponent} from './tabla/tabla.component'


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro-verificacion', component: RegistroverifiComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'inicio2', component: Inicio2Component },
  { path: 'body', component: BodyComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'tabla', component: TablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
