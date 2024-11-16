import { Component } from '@angular/core';
import { INoticia } from '../../../interfaces/inoticia.interface';
import { noticiasNoPublicadas } from './noticias_sin_publicar_mock';
import { NoticiaCardComponent } from '../../../components/noticia-card/noticia-card.component';

@Component({
  selector: 'app-noticias-dashboard',
  standalone: true,
  imports: [NoticiaCardComponent],
  templateUrl: './page-noticias-dashboard.component.html',
  styleUrl: './page-noticias-dashboard.component.css'
})
export class PageNoticiasDashboardComponent {
  arrNoticiasSinPublicar: INoticia[] = [];

  ngOnInit() {
    this.arrNoticiasSinPublicar = noticiasNoPublicadas
  }
}
