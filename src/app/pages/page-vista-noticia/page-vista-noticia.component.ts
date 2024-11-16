import { Component, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NOTICIAS } from '../page-home/mock_noticias';

@Component({
  selector: 'app-page-vista-noticia',
  standalone: true,
  imports: [],
  templateUrl: './page-vista-noticia.component.html',
  styleUrl: './page-vista-noticia.component.css'
})
export class PageVistaNoticiaComponent {
  @Input() miNoticia?: INoticia;
  @Input() noticiaSlug?: string;

  ngOnInit() {
    this.miNoticia = NOTICIAS.find(noticia => noticia.slug === this.noticiaSlug)
  }
}
