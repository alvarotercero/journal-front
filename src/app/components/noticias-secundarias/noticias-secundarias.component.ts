import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NOTICIAS } from '../../pages/page-home/mock_noticias';
import { NoticiaCardComponent } from '../noticia-card/noticia-card.component';

@Component({
  selector: 'app-noticias-secundarias',
  standalone: true,
  imports: [NoticiaCardComponent],
  templateUrl: './noticias-secundarias.component.html',
  styleUrl: './noticias-secundarias.component.css'
})
export class NoticiasSecundariasComponent {
  arrNoticiasSecundarias: INoticia[] = [];

  ngOnInit() {
    this.arrNoticiasSecundarias = NOTICIAS.filter(noticia => noticia.secciones === 'secundario')
  }
}
