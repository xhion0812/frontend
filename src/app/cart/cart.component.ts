import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ClientService } from '../Services/client.service';
import { IItem } from '../interfaces/item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


 public items: Array<IItem>
  public totalPrecio:number = 0;
  public totalCantidad:number = 0;
  constructor(private cartService:CartService, private client: ClientService ) { }

  ngOnInit() {
    this.cartService.datoCarrito.subscribe(dato=>{
      if(dato)
      {
        this.items = dato;
        this.totalCantidad = dato.length;
        this.totalPrecio = dato.reduce((sum, articulo) => sum + (articulo.precio * articulo.cantidad), 0);
      }
    })
  }

  comprar(){

    //this.client.postRequest("",producto).subscribe()
  }

  

  public remover(producto:IItem){
    this.cartService.removerElementoCarrito(producto);
  }
  

}
