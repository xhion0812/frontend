import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroverifiComponent } from './registroverifi/registroverifi.component';
import { Inicio2Component } from './inicio2/inicio2.component'
import { BodyComponent } from './body/body.component';
import { CarritoComponent } from './carrito/carrito.component'
import { LacteosComponent} from './lacteos/lacteos.component'
import { TablaComponent } from './tabla/tabla.component'
import { CarnicosComponent} from './carnicos/carnicos.component'
import { LegumbresComponent} from './legumbres/legumbres.component'
import { VerdurasComponent} from './verduras/verduras.component'
import { CashComponent } from "./cash/cash.component"




const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'registro-verificacion', component: RegistroverifiComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'inicio2', component: Inicio2Component },
  { path: 'body', component: BodyComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'tabla', component: TablaComponent},
  { path: 'lacteos', component: LacteosComponent},
  { path: 'carnicos', component: CarnicosComponent},
  { path: 'legumbres', component: LegumbresComponent},

  { path: 'verduras', component: VerdurasComponent},
  { path: 'cash', component: CashComponent},
  { path: 'verduras', component: VerdurasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
