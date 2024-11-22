import { Component, inject, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiaSliderItemComponent } from '../noticia-slider-item/noticia-slider-item.component';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-destacados',
  standalone: true,
  imports: [NoticiaSliderItemComponent],
  templateUrl: './destacados.component.html',
  styleUrl: './destacados.component.css'
})
export class DestacadosComponent {
  arrNoticiasDestacadas: INoticia[] = [];
  noticiasService = inject(NoticiasService);
  @Input() categoria: string = ''

  async ngOnChanges() {
    try {
      if (this.categoria !== 'home') {
        this.arrNoticiasDestacadas = await this.noticiasService.getAll('destacado', this.categoria, 6)
      }
      else {
        this.arrNoticiasDestacadas = await this.noticiasService.getAll('destacado', undefined, 6)
      }
    } catch (error) {
      console.log(error);
      this.arrNoticiasDestacadas = []
    }
  }
}
