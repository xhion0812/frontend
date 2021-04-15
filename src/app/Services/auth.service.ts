import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = new BehaviorSubject<boolean>(this.checkToken());

  admin = new BehaviorSubject<boolean>(null);

  private checkToken() : boolean {
    return !!localStorage.getItem('token');
  }


  login(token:string) : void {

    localStorage.setItem('token', token);
    this.admin.next(true);
    this.isLogin.next(true);

  }

  
  setCourrentUser(nombres:string) : void {
    localStorage.setItem('courrentUser', nombres);
  }

  getCourrentUser() : string {
    return localStorage.getItem('courrentUser');
  }

  private deleteCourrentUser() : void {
    localStorage.removeItem('courrentUser');
  }

  setCourrentApellido(apellidos:string) : void{
    localStorage.setItem('courrentApellido',apellidos)
  }

  getCourrentApellido() : string {
    return localStorage.getItem('courrentApellido')
  }

  private deleteCourrentApellido() : void {
    localStorage.removeItem('courrentApellido')
  }

  setCourrentDocumento(documento:string) : void {
    localStorage.setItem('courrentDocumento',documento)
  }

  getCourrentDocumento() : string {
    return localStorage.getItem('courrentDocumento')
  }

  private deleteCourrentDocumento() : void {
    localStorage.removeItem('courrentDocumento')
  } 

  setCourrentDireccion(direccion:string) : void {
    localStorage.setItem('courrentDireccion',direccion)
  }

  getCourrentDireccion() : string {
    return localStorage.getItem('courrentDireccion')
  }

  private deleteCourrentDireccion() : void {
    localStorage.removeItem('courrentDireccion')
  }

  setCourrentTelefono(telefono:string) : void {
    localStorage.setItem('courrentTelefono', telefono)
  }

  getCourrentTelefono() : string {
    return localStorage.getItem('courrentTelefono')
  }

  private deleteCourrentTelefono() : void {
    localStorage.removeItem('courrentTelefono')
  }
  setCourrentCorreo(correo:string) : void {
    localStorage.setItem('courrentCorreo',correo)
  }

  getCourrentCorreo() : string {
    return localStorage.getItem('courrentCorreo')
  }

  private deleteCorrentCorreo() : void {
    localStorage.removeItem('courrentCorreo')
  }


  logout() : void {
    localStorage.removeItem('token');
    this.deleteCourrentUser();
    this.isLogin.next(false);
  }

  
  isLoggedIn() : Observable<boolean> {
    return this.isLogin.asObservable();
   }

   /*
   isUser() : Observable<boolean> {
    return this.user.asObservable();
   }
*/
  isAdmin() : Observable<boolean> {
    return this.admin.asObservable();
   }

}

