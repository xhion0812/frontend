import { Component, OnInit } from '@angular/core';
import { IItem } from '../interfaces/item.interface';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-lacteos',
  templateUrl: './lacteos.component.html',
  styleUrls: ['./lacteos.component.css']
})
export class LacteosComponent implements OnInit {
  public listProducts:Array<IItem> = [{
    id: 0,
  img: "https://i.pinimg.com/originals/63/64/fb/6364fbeede3157aac881ed9c088d9c26.png",
  name: "manzana",
  price: 500,
  description: "La manzana es el fruto comestible de la especie Malus domestica, llamada comúnmente manzano. Es una fruta pomácea de forma redonda y sabor más o menos dulce, dependiendo de la variedad. Los manzanos se cultivan en todo el mundo y son las especies más cultivadas en el género Malus..",
  quantity : 1
    },
    {
      id: 1,
    img: "https://thefoodtech.com/wp-content/uploads/2020/05/carne-de-res.jpg",
    name: "carne",
    price: 350,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    quantity : 1
    },
    {
      id: 2,
    img: "https://createc3d.com/shop/1244-thickbox_default/comprar-modulo-rele-5v-compatible-con-arduino-1-canal-precio-oferta.jpg",
    name: "Carne de res",
    price: 120,
    description: "La carne de vacuno, carne de res o carne de buey es la carne obtenida del ganado vacuno o bovino. Una de las primeras razas domésticas que pudieron abastecer al hombre de sus necesidades cárnicas pudo haber sido el uro que se extendió a lo largo de Eurasia.",
    quantity : 1
    },
    {
      id: 4,
      img: "https://www.guiltybit.com/wp-content/uploads/2021/02/manga-Black-Clover-282.jpg",
      name: "Modulo Relay Rele De 1 Canal 5v 10a Arduino Pic Avr Robotica",
      price: 120,
      description: "Módulo de relevadores (reles) para conmutación de cargas de potencia. Los contactos de los relevadores están diseñados para conmutar cargas de hasta 10 A y 250VAC (30VDC), aunque recomendamos dejar un márgen hacia abajo de estos límites. La señal de control puede provenir de cualquier circuito de control TTL o CMOS como un microcontrolador.",
      quantity : 1
    }]
    constructor(private _cartService:CartService) { }
    ngOnInit() {
    }
    public addCart(product:IItem)
    {
      this._cartService.changeCart(product);
    }
  }
