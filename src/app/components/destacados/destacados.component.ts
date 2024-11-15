import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NOTICIAS } from '../../pages/page-home/mock_noticias';
import { NoticiasCardComponent } from "../noticias-card/noticias-card.component";

@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [NoticiasCardComponent],
  templateUrl: './destacados.component.html',
  styleUrl: './destacados.component.css'
})
export class DestacadosComponent {
  arrNoticiasDestacadas: INoticia[] = [];

  async ngOnInit() {
    this.arrNoticiasDestacadas = NOTICIAS.filter(noticia => noticia.secciones === 'destacado');
  }

  currentIndex = 0;

  prevNoticia() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.arrNoticiasDestacadas.length - 1;
  }

  nextNoticia() {
    this.currentIndex = (this.currentIndex < this.arrNoticiasDestacadas.length - 1) ? this.currentIndex + 1 : 0;
  }
}
