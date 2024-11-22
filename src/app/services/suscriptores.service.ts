import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class suscriptoresService {

  private rutaBase = 'http://sql7.freemysqlhosting.net:3306/api/suscriptores';
  private httpClient = inject(HttpClient)

  postCrearSuscriptor(nuevoSuscriptor: any) {
    return firstValueFrom(this.httpClient.post<any>(this.rutaBase, nuevoSuscriptor));
  }

  getActivarSuscriptor(id: number, activo: number, token: string): Promise<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "authSuscriptor": token
    });
    return firstValueFrom(this.httpClient.get<any>(`${this.rutaBase}/activar/${id}/${activo}`, { headers }))
  }

  getExisteEmailSuscriptor(email: string) {
    const existeEmail = firstValueFrom(this.httpClient.get<any>(`${this.rutaBase}/email/${email}`));
    return existeEmail
  }

  solicitarBajaSuscriptor(email: string) {//solamente hace que se reciva un email con el enlace a la baja realmente, el email contendrá un token de auth
    const bajaSuscriptor = firstValueFrom(this.httpClient.get<any>(`${this.rutaBase}/baja/${email}`));
    return bajaSuscriptor;
  }

  deleteSuscriptor(email: string, token: string) {
    const ruta = `${this.rutaBase}/email/${email}`;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "authSuscriptor": token
    });
    const bajaSuscriptor = firstValueFrom(this.httpClient.delete<any>(ruta, { headers }));
    return bajaSuscriptor;
  }
}