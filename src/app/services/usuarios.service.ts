import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IRespuesta } from '../interfaces/irespuesta.interface';
import { IUsuario } from '../interfaces/iusuario.interface';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private endpoint = 'http://localhost:3000/api/usuarios/login'

  /////////////////////////////////////////////////////
  private endpointEditores = 'http://localhost:3000/api/usuarios/editores'
  // Me he hecho un endpoint para los editores porque no me salía con el de los usuarios
  // No se si está bien pero asi funciona :D soy fernando

  private httpClient = inject(HttpClient)

  login(usuario: IUsuario): Promise<IRespuesta> {
    return firstValueFrom(this.httpClient.post<IRespuesta>(this.endpoint, usuario))
  }

  getEditores(): Promise<IUsuario[]> {
    return firstValueFrom(this.httpClient.get<IUsuario[]>(this.endpointEditores));
  }
}
