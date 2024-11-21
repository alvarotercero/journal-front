import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { INoticia } from '../interfaces/inoticia.interface';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private endpoint = 'http://localhost:3000/api/noticias/';
  private httpClient = inject(HttpClient)

  getAll(seccion: string, categoria: string = ''): Promise<INoticia[]> {
    if (categoria) {
      return firstValueFrom(this.httpClient.get<INoticia[]>(`${this.endpoint}?seccion=${seccion}&categoria=${categoria}`))
    }
    return firstValueFrom(this.httpClient.get<INoticia[]>(`${this.endpoint}?seccion=${seccion}`))
  }

  getById(id: number): Promise<INoticia> {
    return firstValueFrom(this.httpClient.get<INoticia>(`${this.endpoint}/${id}`))
  }

  getByUser(): Promise<INoticia[]> {
    return firstValueFrom(this.httpClient.get<INoticia[]>(`${this.endpoint}/usuario/`))
  }

  getBySlug(slug: string): Promise<INoticia> {
    return firstValueFrom(this.httpClient.get<INoticia>(`${this.endpoint}/?slug=${slug}`))
  }

  getUltimasNoticias(limit: number): Promise<INoticia[]> {
    return firstValueFrom(this.httpClient.get<INoticia[]>(`${this.endpoint}/ultimas/?num=${limit}`))
  }

  // Crear una noticia
  insertNoticia(noticia: INoticia): Promise<INoticia[]> {
    return firstValueFrom(this.httpClient.post<INoticia[]>(`${this.endpoint}`, noticia))
  }

  // Editar una noticia
  updateNoticia(noticia: INoticia, id: number): Promise<INoticia> {
    return firstValueFrom(this.httpClient.put<INoticia>(`${this.endpoint}/${id}`, noticia))
  }

}
