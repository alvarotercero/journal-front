import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ISuscriptor } from '../interfaces/isuscriptor.interface';

@Injectable({
  providedIn: 'root'
})
export class SuscriptoresService {

  private endpoint = 'http://localhost:3000/api/suscriptores';
  private httpClient = inject(HttpClient);

  postSuscriptor(suscriptor: ISuscriptor) {
    return firstValueFrom(this.httpClient.post<ISuscriptor>(`${this.endpoint}/`, suscriptor));
  }

}
