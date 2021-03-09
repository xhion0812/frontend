import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor(private http: HttpClient) { }

  getRequest(route: string, data?:any ) {

    let config:any = {
      responseType: "json"
    }

    return this.http.post(route, data, config);

}
}
