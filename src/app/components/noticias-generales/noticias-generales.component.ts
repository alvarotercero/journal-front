import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NOTICIAS } from '../../pages/page-home/mock_noticias';
import { NoticiaCardComponent } from '../noticia-card/noticia-card.component';

@Component({
  selector: 'app-noticias-generales',
  standalone: true,
  imports: [NoticiaCardComponent],
  templateUrl: './noticias-generales.component.html',
  styleUrl: './noticias-generales.component.css'
})
export class NoticiasGeneralesComponent {
  arrNoticiasGenerales: INoticia[] = [];

  ngOnInit() {
    this.arrNoticiasGenerales = NOTICIAS.filter(noticia => noticia.secciones === 'general')
  }
}
