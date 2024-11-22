import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IRespuesta } from '../interfaces/irespuesta.interface';
import { IUsuario } from '../interfaces/iusuario.interface';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private endpoint = 'http://sql7.freemysqlhosting.net:3306/api/usuarios'

  private httpClient = inject(HttpClient)

  login(usuario: IUsuario): Promise<IRespuesta> {
    return firstValueFrom(this.httpClient.post<IRespuesta>(`${this.endpoint}/login`, usuario))
  }

  getEditores(): Promise<IUsuario[]> {
    return firstValueFrom(this.httpClient.get<IUsuario[]>(`${this.endpoint}/editores`));
  }

  // Para obtener el id del usuario y usarlo en el formulario de creación de noticias
  getUsuarioPorId(): Promise<IUsuario> {
    return firstValueFrom(this.httpClient.get<IUsuario>(`${this.endpoint}/usuario`));
  }
}
