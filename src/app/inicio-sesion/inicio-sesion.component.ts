import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InicioSesionService } from '../Services/inicio-sesion.service';


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
    private client: InicioSesionService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    
    });
  }

async onSubmit() {
  
  if (this.form.valid) {

    let data = {
      nombre: this.form.value.nombres,
      password: this.form.value.password,
    }

  this.load = false;
  this.client.postRequest('http://localhost:5000/api/v01/user/inicio-sesion', data).subscribe(
  
  (respuesta: any) => {

    this.route.navigate(['/inicio2']);
    
  },

(error) => {
  console.log(error.status)

})

} else{

  console.log("Form error");
}

}
}