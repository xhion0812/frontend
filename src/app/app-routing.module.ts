import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistroComponent } from './registro/registro.component';

import { BodyComponent } from './body/body.component';
import { CartComponent } from './cart/cart.component';
import { LacteosComponent} from './lacteos/lacteos.component';
import { TablaComponent } from './tabla/tabla.component';
import { DetalleproductosComponent } from './detalleproductos/detalleproductos.component'
import { CarnicosComponent} from './carnicos/carnicos.component';
import { LegumbresComponent} from './legumbres/legumbres.component';
import { VerdurasComponent} from './verduras/verduras.component';
import { CashComponent } from "./cash/cash.component";
import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'body', component: BodyComponent },
  {path: 'carrito', component: CartComponent},
  { path: 'tabla', component: TablaComponent},
  {path: 'detallesproductos/:id', component: DetalleproductosComponent},
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
