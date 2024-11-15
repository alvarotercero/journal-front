import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NOTICIAS } from '../../pages/page-home/mock_noticias';
import { NoticiaSliderItemComponent } from "../noticia-slider-item/noticia-slider-item.component";


@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [NoticiaSliderItemComponent],
  templateUrl: './destacados.component.html',
  styleUrl: './destacados.component.css'
})
export class DestacadosComponent {
  arrNoticiasDestacadas: INoticia[] = [];

  ngOnInit() {
    this.arrNoticiasDestacadas = NOTICIAS.filter(noticia => noticia.secciones === 'destacado');
  }

}
