import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NOTICIAS } from '../../pages/page-home/mock_noticias';

@Component({
  selector: 'app-noticias-generales',
  standalone: true,
  imports: [],
  templateUrl: './noticias-generales.component.html',
  styleUrl: './noticias-generales.component.css'
})
export class NoticiasGeneralesComponent {
  arrNoticiasGenerales: INoticia[] = [];

  ngOnInit() {
    this.arrNoticiasGenerales = NOTICIAS.filter(noticia => noticia.secciones === 'general')
  }
}
