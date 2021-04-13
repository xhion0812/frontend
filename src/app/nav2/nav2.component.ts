import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {

  constructor(public auth: AuthService, private route: Router) { }

  ngOnInit(): void {

  }
  public abrirCart:boolean = false;

  irInicio(){
    this.route.navigate(['/'])
  }

  irInicioSesion(){
    this.route.navigate(['/inicio-sesion'])
  }
  irTable(){
    this.route.navigate(['/tabla'])
  }
  

  cart(){

    this.abrirCart = !this.abrirCart;
  }
}
