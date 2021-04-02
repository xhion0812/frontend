import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ClientService } from '../Services/client.service'
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  tablaDato;
  title = 'DataTables';
  dtOptions: DataTables.Settings = {};
  


  productos: any;
  
  
  
  constructor(private client: ClientService) {}

  ngOnInit(): void {
   

    this.client.getRequestTable('http://localhost:5000/api/v01/user/tabla',localStorage.getItem('token')).subscribe(
      
      (data): any => {
        this.productos = data["datos"]
          console.log(data["datos"])
      },

      (error: any) => {
       
        console.log(error)
       
      },
    
    )
     
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


