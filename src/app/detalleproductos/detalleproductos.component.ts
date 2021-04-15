import { Component, OnInit } from '@angular/core';
import { ClientService } from '../Services/client.service';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';


@Component({
  selector: 'app-detalleprodusctos',
  templateUrl: './detalleproductos.component.html',
  styleUrls: ['./detalleproductos.component.css']
})
export class DetalleproductosComponent implements OnInit {
  productos;
  id;
  constructor(private client: ClientService, private route:ActivatedRoute) { }

  detallesProductos(){
    this.client.getRequestAllsproductos('http://localhost:5000/api/v01/user/tabla').subscribe(
      (data):any =>{
        this.productos = data['datos']
        console.log(data)
      })
  
  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe((params : ParamMap) =>{
      this.id =+ params.get('id');
    })
    
    this.client.getRequestTable('http://localhost:5000/api/v01/user/tabla').subscribe(
      (data):any =>{
        this.productos = data['datos']
        console.log(data)
      })

  }

}
