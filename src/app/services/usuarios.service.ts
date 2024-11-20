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
  private httpClient = inject(HttpClient)

  login(usuario: IUsuario): Promise<IRespuesta> {
    return firstValueFrom(this.httpClient.post<IRespuesta>(this.endpoint, usuario))
  }
}
