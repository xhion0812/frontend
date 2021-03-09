import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { TablaService} from '../Services/tabla.service'
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  title = 'DataTables';
  dtOptions: DataTables.Settings = {};


  productos: any = [{id: 1, nombre: "Arroz", precio: 2000},
                    {id: 2, nombre: "Aceite", precio: 2500},
                    {id: 3, nombre: "Papa", precio: 1800},
                    {id: 4, nombre: "Panela", precio: 4000},
                    {id: 5, nombre: "Arroz", precio: 2000},
                    {id: 6, nombre: "Aceite", precio: 2500},
                    {id: 7, nombre: "Papa", precio: 1800},
                    {id: 8, nombre: "Panela", precio: 4000},
                    {id: 9, nombre: "Arroz", precio: 2000},
                    {id: 10, nombre: "Aceite", precio: 2500},
                    {id: 11, nombre: "Papa", precio: 1800},
                    {id: 12, nombre: "Panela", precio: 4000},
                    ]

  constructor(private tabla: TablaService) {}

  ngOnInit(): void {
    /**
    this.productos = Response.productos;
     */
     
  


    
    this.dtOptions = {

      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    };
    console.log(8787);
  }

}
