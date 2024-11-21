import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class suscriptoresService {

  private endpoint = 'http://localhost:3000/api/suscriptores';
  private httpClient = inject(HttpClient)

  getActivarSuscriptor(id: number, activo: number, token: string): Promise<any> {

    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      "authSuscriptor": token
    });
    console.log("___________FRONT getActivarSuscriptor,: ", headers);

    return firstValueFrom(this.httpClient.get<any>(`${this.endpoint}/activar/${id}/${activo}`, { headers }))
  }

}