import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  
  getRequestAllsproductos(route: string){

    let config:any = {
      responseType: "json"
    
    }
    return this.http.get(route, config)
  } 

  getRequestTable(route: string, token?:string) {

    let config:any = {
      responseType: "json"
    }
    if (token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config['headers'] = header
    }
    
    return this.http.get(route, config);
  
  }

  postRequestAnadirCarrito(route: string, data?:any){

  }


  postRequestRegistro(route: string, data?:any, token?:string) {

    let config:any = {
      responseType: "json"
    }

    if(token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config['header'] = header;
    }
    return this.http.post(route, data, config);
  }

  postRequestInicioSesion(route: string, data?:any, token?:string) {

    let config:any = {
      responseType: "json"
    }

    if(token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config['header'] = header;
    }
    return this.http.post(route, data, config);
  }

 getRequestToken(route: string, token?:string) {

    let config:any = {
      responseType: "json"
    }
    if (token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config["headers"] = header;
    }
    console.log(config);

    return this.http.get(route, config);
  }


  postRequest(route: string, data?:any, token?:string) {
    let config:any = {
      responseType: "json"
    }

    if (token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config["header"] = header;
    }

    return this.http.post(route, data, config);
  }
}
