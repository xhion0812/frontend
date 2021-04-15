import { Component, OnInit } from '@angular/core';
import { IItem } from '../interfaces/item.interface';
import { CartService } from '../services/cart.service';



@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.component.html',
  styleUrls: ['./lacteos.component.css']
})
export class LacteosComponent implements OnInit {

  public listProductos:Array<IItem> = [
  { id: 0, 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vKcjgVNV0DnWplH0bQzQswy-3bf-zhuphA&usqp=CAU",
    nombre: "Kumis",
    precio: 500,
    cantidad : 1 },
    
    { id: 1,
      img: "https://exitocol.vtexassets.com/arquivos/ids/4574282/QUESO-SANDUCHE-TAJADO-EXITO-MARCA-PROPIA-200-Gramo-424772_a.jpg?v=637385270910200000",
      nombre: "Queso",
      precio: 350,
      cantidad : 1 },
    

    { id: 2,
      img: "https://static.carrefour.es/hd_510x_/img_pim_food/193100_00_1.jpg", 
      nombre: "Helado", 
      precio: 120,
      cantidad : 1 },


    { id: 3,
      img: "https://images.rappi.com.mx/products/977086784-1580932848675.png",
      nombre: "Mantequilla",
      precio: 120,
      cantidad : 1 }]



    constructor(private cartService:CartService) { }
   
   
    ngOnInit() {
    }
    
    public agragarCarrito(producto:IItem){
      
      this.cartService.enviarCarrito(producto);
    }
 
 
  }

