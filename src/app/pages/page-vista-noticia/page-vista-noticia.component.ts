import { Component, inject, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-page-vista-noticia',
  standalone: true,
  imports: [],
  templateUrl: './page-vista-noticia.component.html',
  styleUrl: './page-vista-noticia.component.css'
})
export class PageVistaNoticiaComponent {
  @Input() miNoticia?: INoticia;
  @Input() noticiaSlug: string = '';

  noticiasService = inject(NoticiasService)
  async ngOnInit() {
    this.miNoticia = await this.noticiasService.getById(1)
  }
}
