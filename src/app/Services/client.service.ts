import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getRequest(route: string) {

    let config:any = {
      responseType: "json"
    }

    
    return this.http.get(route, config);

}

postRequestRegistro(route: string, data?:any) {

  let config:any = {
    responseType: "json"
  }

  return this.http.post(route, data, config);

}

}

