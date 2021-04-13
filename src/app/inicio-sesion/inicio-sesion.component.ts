import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { ClientService } from '../Services/client.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { report } from 'process';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  
  load: boolean = true;
  form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private route: Router,

    private client: ClientService,

    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    
    });
  }

async onSubmit() {
  
  if (this.form.valid) {

    let data = {
      email: this.form.value.email,
      password: this.form.value.password,
    }

  this.load = false;
  this.client.postRequestInicioSesion('http://localhost:5000/api/v01/user/inicio-sesion', data).subscribe(
  
  (response: any) => {
  
    Swal.fire({
      title: 'Bienvenido !',
      imageUrl: 'https://media0.giphy.com/media/ZZYXNDxMcMDXIblV8L/source.gif',
      imageWidth: 400,
      imageHeight: 200,

    }).then(() => {
      this.route.navigate(["/"])
    });
    
    console.log(response);

    this.auth.login(response.token)
    
    this.auth.setCourrentUser(response.nombres)
    
    this.auth.setCourrentApellido(response.apellidos)
    
    this.auth.setCourrentDocumento(response.documento)
    
    this.auth.setCourrentDireccion(response.direccion)
    
    this.auth.setCourrentTelefono(response.telefono)
    
    this.auth.setCourrentCorreo(response.correo)
    
  localStorage.setItem('token', response.token)
  console.log(localStorage.getItem('token'));
    
  
  },

(error) => {

  console.log(error.status);

})

} else{
  
  console.log("Form error");
    
    }

  }
}