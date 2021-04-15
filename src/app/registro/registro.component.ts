import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../Services/client.service';

import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ClientService
  ) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
     documento: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  async onSubmit() {

    if (this.form.valid) {

      this.load = false;
      this.client.postRequestRegistro('http://localhost:5000/api/v01/user/registro',{
        nombres: this.form.value.nombres,
        apellidos: this.form.value.apellidos,
        documento: this.form.value.documento,
        direccion: this.form.value.direccion,
        telefono: this.form.value.telefono,
        correo: this.form.value.correo,
        password: this.form.value.password,
     
      }).subscribe(

        (response: any) => {
          this.load = true;
          console.log(response);

          //localStorage.setItem('token', response.token)
          //console.log(localStorage.setItem('token'));
          
          //cambiando load a true, volvemos a ocultar el spinner
          //this.load = true;
          //this.route.navigate(['/inicio2']);
           //console.log(response);
          Swal.fire({
            position: 'top-end',
            title: 'Se registro exitosamente!',
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            this.route.navigate(['/'])
          })

          });

      (error) => {
        //this.load = true;
        console.log(error.status);
      }

    } else {

      console.log("Form error");
    }
  }

  
}