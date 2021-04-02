import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public auth : AuthService, private route: Router) { }

  irInicio(){
    this.route.navigate(['/'])
  }

  irInicioSesion(){
    this.route.navigate(['/inicio-sesion'])
  }
  irTable(){
    this.route.navigate(['/tabla'])
  }


  ngOnInit(): void {
 
  }

}
